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
  const [insurances, setInsurances] = useState(['All Insurances']);
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedInsurance, setSelectedInsurance] = useState('All Insurances');
  const [medications, setMedications] = useState([]);
  const [selectedMedications, setSelectedMedications] = useState([]);

  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        const rawData = await fetchData('bills-exposed-database');
        const uniqueProcedures = new Set();
        const uniqueStates = new Set();
        const uniqueInsurances = new Set();
        const uniqueMedications = new Set();
        const proceduresMap = new Map();

        rawData.forEach(item => {
          uniqueProcedures.add(item.procedure);
          uniqueStates.add(item.state);
          uniqueInsurances.add(item.insurance);
          if (item.medication) {
            uniqueMedications.add(item.medication);
          }

          const key = item.procedure;
          if (!proceduresMap.has(key)) {
            proceduresMap.set(key, {
              procedure: item.procedure,
              price: parseFloat(item.price_0_25) || 0,
              count: 1,
              state: item.state,
              insurance: item.insurance,
              medication: item.medication
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
        const sortedMedications = Array.from(uniqueMedications).sort();

        setStates(['All States', ...sortedStates]);
        
        // Update insurance options
        const insuranceOptions = ['All Insurances', ...sortedInsurances];
        setInsurances(insuranceOptions);
        
        // Set default insurance to "None" if it exists, otherwise "All Insurances"
        const defaultInsurance = insuranceOptions.includes('None') ? 'None' : 'All Insurances';
        setSelectedInsurance(defaultInsurance);

        setMedications(sortedMedications);
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
        const matchesMedication = selectedMedications.length === 0 || selectedMedications.includes(proc.medication);
        return matchesSearch && matchesState && matchesInsurance && matchesMedication;
      })
      .sort((a, b) => a.procedure.localeCompare(b.procedure));
  }, [procedures, searchTerm, selectedState, selectedInsurance, selectedMedications]);

  const initialItemsToShow = 7;
  const displayedProcedures = showAll ? sortedAndFilteredProcedures : sortedAndFilteredProcedures.slice(0, initialItemsToShow);

  const toggleMedication = (medication) => {
    setSelectedMedications(prev => 
      prev.includes(medication)
        ? prev.filter(med => med !== medication)
        : [...prev, medication]
    );
  };

  return (
    <Box width="100%" maxWidth="1400px" mx="auto" pt={12} pb={20}>
      {/* Title and Subtitle */}
      <Box mb={8} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" mb={2}>See GLP-1 providers for your needs.</Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          We are actively growing this to more cities, providers, and GLP-1 medications.
        </Text>

        {/* Search Bar */}
        <Box maxWidth="1200px" mx="auto">
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
      </Box>

      {/* Center-aligned container for Filters and Procedures */}
      <Flex justifyContent="center" px={4} mb={12}>
        <Flex maxWidth="1200px" width="100%">
          {/* Filters Column */}
          <Box
            width="250px"
            pr={8}
            borderRight="1px solid"
            borderColor="gray.200"
          >
            <Flex alignItems="center" justifyContent="space-between" mb={4}>
              <Flex alignItems="flex-start">
                <Text fontSize="2xl" fontWeight="bold" mr={2}>
                  Filters
                </Text>
                <Tooltip
                  label="We are actively growing to more cities, providers, and insurance plans. Add your bill to help us grow."
                  aria-label="Filter information"
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <InfoOutlineIcon
                      boxSize={4}
                      color="var(--color-primary)"
                      cursor="pointer"
                    />
                  </Box>
                </Tooltip>
              </Flex>
            </Flex>
            <Flex direction="column" gap={3} mb={4}>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="100%" justifyContent="space-between" bg="gray.100" _hover={{ bg: "gray.200" }} borderRadius="full">
                  <Flex width="100%" justifyContent="space-between" alignItems="center">
                    <Text>State:</Text>
                    <Text>{selectedState}</Text>
                  </Flex>
                </MenuButton>
                <MenuList maxHeight="200px" overflowY="auto">
                  {states.map((state, index) => (
                    <MenuItem key={index} onClick={() => setSelectedState(state)}>{state}</MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} width="100%" justifyContent="space-between" bg="gray.100" _hover={{ bg: "gray.200" }} borderRadius="full">
                  <Flex width="100%" justifyContent="space-between" alignItems="center">
                    <Text>Insurance:</Text>
                    <Text>{selectedInsurance}</Text>
                  </Flex>
                </MenuButton>
                <MenuList maxHeight="200px" overflowY="auto">
                  {insurances.map((insurance, index) => (
                    <MenuItem key={index} onClick={() => setSelectedInsurance(insurance)}>{insurance}</MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Box>
                <Text mb={2} fontWeight="bold">Medication:</Text>
                <Wrap spacing={2}>
                  {medications.map((medication, index) => (
                    <WrapItem key={index}>
                      <Button
                        size="sm"
                        onClick={() => toggleMedication(medication)}
                        bg={selectedMedications.includes(medication) ? "var(--color-secondary)" : "gray.100"}
                        color={selectedMedications.includes(medication) ? "white" : "black"}
                        _hover={{ 
                          bg: selectedMedications.includes(medication) 
                            ? "var(--color-secondary)" 
                            : "gray.200",
                          opacity: selectedMedications.includes(medication) ? 0.8 : 1
                        }}
                        borderRadius="full"
                      >
                        {medication}
                      </Button>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </Flex>
          </Box>

          {/* Procedures Column */}
          <Box flex={1} pl={8}>
            {/* New title for procedure cards section with info icon */}
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
                    position="absolute"
                    top="1"
                    right="-20px"
                  />
                </Tooltip>
              </Flex>
            </Flex>

            <Grid templateColumns="repeat(4, 1fr)" gap={6} justifyContent="center">
              <Link to="/addbillpage">
                <Box
                  width="200px"
                  height="240px"
                  borderRadius="16px"
                  overflow="hidden"
                  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                  border="1px solid #e0e0e0"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  bg="var(--color-primary)"
                  color="white"
                  _hover={{ bg: "var(--color-secondary)" }}
                >
                  <Text fontSize="xl" fontWeight="bold" textAlign="center" px={4} maxWidth="160px">
                    + Add Your Bill
                  </Text>
                  <Text fontSize="sm" textAlign="center" mt={2} maxWidth="160px">
                    Help others by sharing your costs
                  </Text>
                </Box>
              </Link>
              {displayedProcedures.map((proc, index) => (
                <ProcedurePill
                  key={index}
                  link={proc.link}
                  procedure={proc.procedure}
                  price={proc.price}
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
        </Flex>
      </Flex>
    </Box>
  );
}
