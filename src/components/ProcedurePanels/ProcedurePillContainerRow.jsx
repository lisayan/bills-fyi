import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Box, Text, Flex, Grid, Input, Button, Menu, MenuButton, MenuList, MenuItem,
  InputGroup, InputLeftElement, Tooltip, Icon, ButtonGroup, Wrap, WrapItem,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
  Stack, useBreakpointValue
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import ProcedurePill from './ProcedurePill.jsx';
import { fetchData } from '../DisplayData/AWS_DDB.jsx';
import '../../styles/procedurepanels.css';

export default function ProcedurePillContainerRow() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [procedures, setProcedures] = useState([]);
  const [states, setStates] = useState(['All States']);
  const [selectedState, setSelectedState] = useState('All States');
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedMedications, setSelectedMedications] = useState(() => {
    const medication = searchParams.get('medication');
    return medication ? medication.split(',') : ['All'];
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState(() => {
    const price = searchParams.get('price');
    return price || 'All Prices';
  });

  // Responsive values
  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
  const spacing = useBreakpointValue({ base: 4, md: 6 });
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
  const fontSize = useBreakpointValue({ base: "sm", md: "md" });
  const padding = useBreakpointValue({ base: 4, md: 8 });

  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        const rawData = await fetchData('bills-exposed-database');
        const uniqueProcedures = new Set();
        const uniqueMedications = new Set();
        const uniqueStates = new Set();
        const proceduresMap = new Map();

        rawData.forEach(item => {
          uniqueProcedures.add(item.procedure);
          uniqueMedications.add(item.insurance);
          uniqueStates.add(item.state);

          const key = `${item.procedure}-${item.insurance}`;
          if (!proceduresMap.has(key)) {
            proceduresMap.set(key, {
              procedure: item.procedure,
              price: parseFloat(item.insurance === "Compounded Tirzepatide" ? item.price_2_5 : item.price_0_25) || 0,
              count: 1,
              state: item.state,
              insurance: item.insurance_actual,
              medication: item.insurance,
              website: item.website,
              star_rating: item.star_rating || 0,
              number_reviews: item.number_reviews || 0
            });
          } else {
            const existing = proceduresMap.get(key);
            existing.price += parseFloat(item.insurance === "Compounded Tirzepatide" ? item.price_2_5 : item.price_0_25) || 0;
            existing.count += 1;
          }
        });

        const proceduresList = Array.from(proceduresMap.values()).map(p => ({
          ...p,
          price: Math.round(p.price / p.count),
          link: `/${p.procedure.replace(/\s+/g, '_').toLowerCase()}`
        }));

        setProcedures(proceduresList);

        const sortedStates = Array.from(uniqueStates).sort();
        setStates(['All States', ...sortedStates]);

      } catch (error) {
        console.error('Error fetching procedures:', error);
      }
    };

    fetchProcedures();
  }, []);

  useEffect(() => {
    const showPopup = searchParams.get('popup') === 'true';
    setIsPopupOpen(showPopup);
  }, [searchParams]);

  const sortedAndFilteredProcedures = useMemo(() => {
    return procedures
      .filter(proc => {
        const matchesSearch = proc.procedure.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesState = selectedState === 'All States' || proc.state === selectedState;
        const matchesMedication = selectedMedications.includes('All') || selectedMedications.includes(proc.medication);
        const matchesPrice = selectedPriceRange === 'All Prices' || 
          (selectedPriceRange === '<$500' && proc.price < 500) ||
          (selectedPriceRange === '$500-$1000' && proc.price >= 500 && proc.price <= 1000) ||
          (selectedPriceRange === '>$1000' && proc.price > 1000);
        
        return matchesSearch && matchesState && matchesMedication && matchesPrice;
      })
      .sort((a, b) => {
        // Check if either procedure contains "Mochi Health"
        const isMochiA = a.procedure.includes('Mochi Health');
        const isMochiB = b.procedure.includes('Mochi Health');

        // If one is Mochi Health and the other isn't, prioritize Mochi Health
        if (isMochiA && !isMochiB) return -1;
        if (!isMochiA && isMochiB) return 1;

        // If neither or both are Mochi Health, sort alphabetically
        return a.procedure.localeCompare(b.procedure);
      });
  }, [procedures, searchTerm, selectedState, selectedMedications, selectedPriceRange]);

  const initialItemsToShow = useBreakpointValue({ base: 4, sm: 6, md: 8, lg: 12 });
  const displayedProcedures = showAll ? sortedAndFilteredProcedures : sortedAndFilteredProcedures.slice(0, initialItemsToShow);

  const handleMedicationChange = (medication) => {
    let newMedications;
    
    if (medication === 'All') {
      newMedications = ['All'];
    } else if (selectedMedications.includes(medication)) {
      newMedications = selectedMedications.filter(med => med !== medication);
      if (newMedications.length === 0) newMedications = ['All'];
    } else {
      newMedications = selectedMedications.filter(med => med !== 'All');
      newMedications.push(medication);
    }

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('popup');

    if (newMedications.length === 1 && newMedications[0] === 'All') {
      newSearchParams.delete('medication');
    } else {
      newSearchParams.set('medication', newMedications.join(','));
    }

    setSearchParams(newSearchParams);
    setSelectedMedications(newMedications);
  };

  return (
    <Box width="100%" maxWidth="1400px" mx="auto" pt={6} pb={10} px={padding}>
      <Modal isOpen={isPopupOpen} onClose={() => {
        setIsPopupOpen(false);
        const currentUrl = window.location.href;
        const newUrl = currentUrl
          .replace('?popup=true&', '?')
          .replace('&popup=true', '')
          .replace('?popup=true', '');
        window.history.replaceState({}, '', newUrl);
      }}>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalCloseButton 
            bg="var(--color-secondary)"
            borderRadius="full"
            _hover={{
              bg: "var(--color-secondary)",
              opacity: 0.8
            }}
          />
          <ModalHeader fontSize={fontSize}>Which drug is right for you?</ModalHeader>
          <ModalBody pb={6}>
            {(selectedMedications.some(med => ['Ozempic', 'Wegovy', 'Mounjaro', 'Zepbound'].includes(med)) && 
              selectedPriceRange === '<$500') ? (
              <Text fontSize={fontSize}>
                You selected {selectedMedications.join(', ')} but your budget is &lt;$500.
                {selectedMedications.length === 1 ? selectedMedications[0] : 'These medications are'} is usually 
                &gt;$1000. We recommend exploring compounded semaglutide or tirzepatide.
              </Text>
            ) : (
              <Text fontSize={fontSize}>
                Brand names like Ozempic, Wegovy, Mounjaro, and Zepbound are more expensive than compounded alternatives (semaglutide and tirzepatide). Brand names are usually over $1000, while compounds are less than $500.
              </Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>

      <Box mb={6} textAlign="center">
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={2}>
          See GLP-1 providers for your needs.
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" mb={4}>
          We are actively growing this to more cities, providers, and GLP-1 medications.
        </Text>

        <Box maxWidth="1200px" mx="auto" mb={4} px={2}>
          <InputGroup size={buttonSize}>
            <InputLeftElement pointerEvents="none" height="100%">
              <SearchIcon color="gray.300" boxSize={4} />
            </InputLeftElement>
            <Input
              placeholder="Search providers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderRadius="full"
              fontSize={fontSize}
              py={4}
              pl={10}
              pr={4}
            />
          </InputGroup>
        </Box>

        <Stack 
          direction={{ base: "column", md: "row" }} 
          spacing={4} 
          mb={6}
          px={2}
          align="center"
          justify="center"
        >
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="gray.100" _hover={{ bg: "gray.200" }} borderRadius="full" size={buttonSize}>
              <Flex alignItems="center">
                <Text mr={2} fontSize={fontSize}>State:</Text>
                <Text fontWeight="bold" fontSize={fontSize}>{selectedState}</Text>
              </Flex>
            </MenuButton>
            <MenuList maxHeight="200px" overflowY="auto">
              {states.map((state, index) => (
                <MenuItem key={index} onClick={() => setSelectedState(state)} fontSize={fontSize}>{state}</MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="gray.100" _hover={{ bg: "gray.200" }} borderRadius="full" size={buttonSize}>
              <Flex alignItems="center">
                <Text mr={2} fontSize={fontSize}>Price:</Text>
                <Text fontWeight="bold" fontSize={fontSize}>{selectedPriceRange}</Text>
              </Flex>
            </MenuButton>
            <MenuList>
              {['All Prices', '<$500', '$500-$1000', '>$1000'].map((price) => (
                <MenuItem key={price} onClick={() => {
                  setSelectedPriceRange(price);
                  const newSearchParams = new URLSearchParams(searchParams);
                  newSearchParams.delete('popup');
                  if (price === 'All Prices') {
                    newSearchParams.delete('price');
                  } else {
                    newSearchParams.set('price', price);
                  }
                  setSearchParams(newSearchParams);
                }} fontSize={fontSize}>
                  {price}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="gray.100" _hover={{ bg: "gray.200" }} borderRadius="full">
              <Flex alignItems="center">
                <Text mr={2}>Medication:</Text>
                <Text fontWeight="bold">
                  {selectedMedications.includes('All') 
                    ? 'All' 
                    : selectedMedications.length > 1 
                      ? `${selectedMedications.length} selected` 
                      : selectedMedications[0]}
                </Text>
              </Flex>
            </MenuButton>
            <MenuList maxHeight="200px" overflowY="auto">
              {['All', 'Ozempic', 'Wegovy', 'Mounjaro', 'Zepbound', 'Compounded Semaglutide', 'Compounded Tirzepatide'].map((medication) => (
                <MenuItem 
                  key={medication} 
                  onClick={() => handleMedicationChange(medication)}
                  bg={selectedMedications.includes(medication) ? "gray.200" : "transparent"}
                >
                  {medication}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          </Stack>
      </Box>

      {/* Procedures */}
      <Box maxWidth="1200px" mx="auto">
        {/* Featured Provider Spotlight */}
        {sortedAndFilteredProcedures.some(proc => 
          proc.procedure.includes('Mochi Health') && 
          proc.medication === 'Compounded Semaglutide'
        ) && (
          <Box 
            mb={8} 
            p={6}
            borderRadius="xl"
            border="1px solid"
            borderColor="var(--color-secondary)"
            maxWidth="400px"
            mx="auto"
          >
            <Flex alignItems="center" mb={4} justifyContent="center">
              <Text 
                fontSize="lg" 
                fontWeight="bold" 
                color="white"
                px={3}
                py={1}
                bg="var(--color-secondary)"
                borderRadius="full"
                mr={3}
              >
                Featured
              </Text>
            </Flex>
            <Flex justifyContent="center">
              {sortedAndFilteredProcedures
                .filter(proc => 
                  proc.procedure.includes('Mochi Health') && 
                  proc.medication === 'Compounded Semaglutide'
                )
                .slice(0, 1)
                .map((proc, index) => (
                  <ProcedurePill
                    key={`featured-${index}`}
                    link={proc.link}
                    website={proc.website}
                    procedure={proc.procedure}
                    price={proc.price}
                    medication={proc.medication}
                    rating={proc.star_rating}
                    reviewCount={proc.number_reviews}
                  />
                ))}
            </Flex>
          </Box>
        )}

        {/* Title for all providers section */}
        <Flex alignItems="center" mb={4}>
          <Flex alignItems="center" position="relative">
            <Text fontSize="2xl" fontWeight="bold" mr={2}>All Providers</Text>
            <Tooltip
              label="Click on a provider to see reviews, price breakdowns, and more."
              aria-label="Procedures information"
              placement="top"
              hasArrow
            >
              <InfoOutlineIcon
                boxSize={4}
                color="var(--color-primary)"
                cursor="pointer"
              />
            </Tooltip>
          </Flex>
        </Flex>

        <Grid templateColumns={`repeat(${gridColumns}, 1fr)`} gap={spacing} justifyContent="center">
          {displayedProcedures.map((proc, index) => (
            <ProcedurePill
              key={index}
              link={proc.link}
              website={proc.website}
              procedure={proc.procedure}
              price={proc.price}
              medication={proc.medication}
              rating={proc.star_rating}
              reviewCount={proc.number_reviews}
            />
          ))}
        </Grid>
        
        {!showAll && sortedAndFilteredProcedures.length > initialItemsToShow && (
          <Flex justifyContent="center" mt={6}>
            <Button
              onClick={() => setShowAll(true)}
              borderColor="var(--color-primary)"
              borderRadius="full"
              color="white"
              bg="var(--color-primary)"
              _hover={{ opacity: 0.8 }}
              size={buttonSize}
            >
              Show More
            </Button>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
