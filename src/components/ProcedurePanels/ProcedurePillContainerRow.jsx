import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Text, Flex, Grid, Input, Button, Menu, MenuButton, MenuList, MenuItem,
  InputGroup, InputLeftElement, Tooltip, Icon, ButtonGroup, Wrap, WrapItem
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
  const [insurances, setInsurances] = useState(['All Insurances']);
  const [selectedInsurance, setSelectedInsurance] = useState('All Insurances');
  const [selectedMedication, setSelectedMedication] = useState('All');

  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        const rawData = await fetchData('bills-exposed-database');
        const uniqueProcedures = new Set();
        const uniqueMedications = new Set();
        const uniqueStates = new Set();
        const uniqueInsurances = new Set();
        const proceduresMap = new Map();

        rawData.forEach(item => {
          uniqueProcedures.add(item.procedure);
          uniqueMedications.add(item.insurance);
          uniqueStates.add(item.state);
          uniqueInsurances.add(item.insurance_actual);

          const key = `${item.procedure}-${item.insurance}`;
          if (!proceduresMap.has(key)) {
            proceduresMap.set(key, {
              procedure: item.procedure,
              price: parseFloat(item.price_0_25) || 0,
              count: 1,
              state: item.state,
              insurance: item.insurance_actual,
              medication: item.insurance,
              website: item.website
            });
          } else {
            const existing = proceduresMap.get(key);
            existing.price += parseFloat(item.price_0_25) || 0;
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
        const sortedInsurances = Array.from(uniqueInsurances).sort();

        setStates(['All States', ...sortedStates]);

        // Update insurance options
        const insuranceOptions = ['All Insurances', ...sortedInsurances];
        setInsurances(insuranceOptions);

        // Set default insurance to "None" if it exists, otherwise "All Insurances"
        const defaultInsurance = insuranceOptions.includes('None') ? 'None' : 'All Insurances';
        setSelectedInsurance(defaultInsurance);

      } catch (error) {
        console.error('Error fetching procedures:', error);
      }
    };

    fetchProcedures();
  }, []);

  const sortedAndFilteredProcedures = useMemo(() => {
    return procedures
      .filter(proc => {
        const matchesSearch = proc.procedure.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesState = selectedState === 'All States' || proc.state === selectedState;
        const matchesInsurance = selectedInsurance === 'All Insurances' || proc.insurance === selectedInsurance;
        const matchesMedication = selectedMedication === 'All' || proc.medication === selectedMedication;
        return matchesSearch && matchesState && matchesInsurance && matchesMedication;
      })
      .sort((a, b) => a.procedure.localeCompare(b.procedure));
  }, [procedures, searchTerm, selectedState, selectedInsurance, selectedMedication]);

  const initialItemsToShow = 7;
  const displayedProcedures = showAll ? sortedAndFilteredProcedures : sortedAndFilteredProcedures.slice(0, initialItemsToShow);

  return (
    <Box width="100%" maxWidth="1400px" mx="auto" pt={12} pb={20}>
      {/* Title and Subtitle */}
      <Box mb={8} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" mb={2}>See GLP-1 providers for your needs.</Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          We are actively growing this to more cities, providers, and GLP-1 medications.
        </Text>

        {/* Search Bar */}
        <Box maxWidth="1200px" mx="auto" mb={6}>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none" height="100%">
              <SearchIcon color="gray.300" boxSize={6} />
            </InputLeftElement>
            <Input
              placeholder="Search providers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderRadius="full"
              fontSize="lg"
              py={6}
              pl={12}
              pr={6}
            />
          </InputGroup>
        </Box>

        {/* Filters */}
        <Flex justifyContent="center" mb={8}>
          <Flex gap={4} alignItems="center">
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="gray.100" _hover={{ bg: "gray.200" }} borderRadius="full">
                <Flex alignItems="center">
                  <Text mr={2}>State:</Text>
                  <Text fontWeight="bold">{selectedState}</Text>
                </Flex>
              </MenuButton>
              <MenuList maxHeight="200px" overflowY="auto">
                {states.map((state, index) => (
                  <MenuItem key={index} onClick={() => setSelectedState(state)}>{state}</MenuItem>
                ))}
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="gray.100" _hover={{ bg: "gray.200" }} borderRadius="full">
                <Flex alignItems="center">
                  <Text mr={2}>Insurance:</Text>
                  <Text fontWeight="bold">{selectedInsurance}</Text>
                </Flex>
              </MenuButton>
              <MenuList maxHeight="200px" overflowY="auto">
                {insurances.map((insurance, index) => (
                  <MenuItem key={index} onClick={() => setSelectedInsurance(insurance)}>{insurance}</MenuItem>
                ))}
              </MenuList>
            </Menu>

            <ButtonGroup isAttached variant="outline" borderRadius="full" overflow="hidden">
              {['All', 'Ozempic', 'Wegovy', 'Mounjaro', 'Zepbound'].map((medication, index) => (
                <Button
                  key={medication}
                  onClick={() => setSelectedMedication(medication)}
                  isActive={selectedMedication === medication}
                  bg={selectedMedication === medication ? "blue.100" : "gray.100"}
                  color="black"
                  _hover={{
                    bg: "gray.200",
                  }}
                  _active={{
                    bg: "blue.300",
                  }}
                  borderRadius={index === 0 ? "full" : index === 3 ? "full" : 0}
                  borderLeftRadius={index === 0 ? "full" : 0}
                  borderRightRadius={index === 3 ? "full" : 0}
                >
                  {medication}
                </Button>
              ))}
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>

      {/* Procedures */}
      <Box maxWidth="1200px" mx="auto">
        {/* Title for procedure cards section with info icon */}
        <Flex alignItems="center" mb={4}>
          <Flex alignItems="center" position="relative">
            <Text fontSize="2xl" fontWeight="bold" mr={2}>Providers</Text>
            <Tooltip
              label="Click on a procedure to see more details and price breakdowns. These are the top procedures in the region. We are growing this list. Add your bill to help."
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

        <Grid templateColumns="repeat(4, 1fr)" gap={6} justifyContent="center">
          {displayedProcedures.map((proc, index) => (
            <ProcedurePill
              key={index}
              link={proc.link}
              website={proc.website}
              procedure={proc.procedure}
              price={proc.price}
              medication={proc.medication}
            />
          ))}
        </Grid>
        {!showAll && sortedAndFilteredProcedures.length > initialItemsToShow && (
          <Flex justifyContent="center" mt={8}>
            <Button
              onClick={() => setShowAll(true)}
              borderColor="var(--color-primary)"
              borderRadius="full"
              color="var(--color-primary)"
              variant="outline"
              _hover={{ bg: "var(--color-primary)", color: "white" }}
            >
              Show More
            </Button>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
