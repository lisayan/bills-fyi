import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, Text, Flex, Grid, Input, Button, Menu, MenuButton, MenuList, MenuItem,
  InputGroup, InputLeftElement, Tooltip, Icon
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import ProcedurePill from './ProcedurePill.jsx';
import { fetchData } from '../DisplayData/AWS_DDB.jsx';
import mriIcon from "../../images/mri_icon.jpg";
import xrayIcon from "../../images/xray_icon.jpg";
import ctIcon from "../../images/ct-scan.png";
import ERIcon from "../../images/emergency_room_icon.jpg";
import IUDIcon from "../../images/iud.jpg";
import ambulanceIcon from "../../images/ambulance_icon.jpg";
import cardioIcon from "../../images/cardiologist_icon.jpg";
import PTIcon from "../../images/physical_therapy_icon.jpg";
import bloodTestIcon from "../../images/blood_test.jpg";
import acneIcon from '../../images/acne.jpg';
import botoxIcon from "../../images/botox.jpg";
import childBirthIcon from "../../images/childbirth.jpg";
import colonoscopyIcon from "../../images/colonoscopy.jpg";
import virtualIcon from "../../images/virtual.jpg";
import lipFillerIcon from "../../images/lip_filler.jpg";
import mammogramIcon from "../../images/mammogram.jpg";
import primaryCareIcon from "../../images/primary_care.jpg";
import surgeryIcon from "../../images/surgery.jpg";
import heartSurgeryIcon from "../../images/heart_surgery.jpg";
import stitchesIcon from "../../images/stitches.jpg";
import papSmearIcon from "../../images/pap_smear.jpg";
import hospitalStayIcon from "../../images/hospital_stay.png";
import kneeSurgeryIcon from "../../images/knee_surgery.jpg";
import chemoIcon from "../../images/chemotherapy.jpg";
import dentalCleaningIcon from "../../images/dental_cleaning.png";
import rootCanalIcon from "../../images/root_canal.jpg";
import stdIcon from "../../images/std.jpg";
import dialysisIcon from "../../images/dialysis.png";
import hairTransplantIcon from "../../images/hair_transplant.jpg";
import tonsilsIcon from "../../images/tonsils.png";
import cardiacRecorderIcon from "../../images/cardiac-monitor.png"
import bruisesIcon from "../../images/bruises.png"
import catheterIcon from "../../images/catheter.png"
import jointsIcon from "../../images/joints.png"
import abscessIcon from "../../images/abscess.png"
import '../../styles/procedurepanels.css';

export default function ProcedurePillContainerRow() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [procedurePrices, setProcedurePrices] = useState({});
  const [cities, setCities] = useState(['All Cities']);
  const [states, setStates] = useState(['All States']);
  const [insurances, setInsurances] = useState(['All Insurances']);
  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedInsurance, setSelectedInsurance] = useState('All Insurances');

  const procedures = [
    { link: "/Mammogram", image: mammogramIcon, procedure: "Mammogram" },
    { link: "/MRI_brain", image: mriIcon, procedure: "MRI Brain (no contrast)" },
    { link: "/ct_abdomen_pelvis_contrast", image: ctIcon, procedure: "CT Abdomen/Pelvis (contrast)" },
    { link: "/ct_chest_contrast", image: ctIcon, procedure: "CT Chest (contrast)" },
    { link: "/xray_chest", image: xrayIcon, procedure: "X-Ray Chest" },
    { link: "/xray_foot", image: xrayIcon, procedure: "X-Ray Foot" },
    { link: "/colonoscopy", image: colonoscopyIcon, procedure: "Colonoscopy" },
    { link: "/pt_therapeutic_exercise", image: PTIcon, procedure: "Physical Therapy Therapeutic Exercise" },
    { link: "/tonsils_under_12", image: tonsilsIcon, procedure: "Tonsils Removal (under 12)" },
    { link: "/tonsils_over_12", image: tonsilsIcon, procedure: "Tonsils Removal (over 12)" },
    { link: "/surgical_drainage_hematoma_seroma", image: bruisesIcon, procedure: "Surgical drainage of hematoma/seroma" },
    { link: "/diagnostic_heart_catheterization", image: catheterIcon, procedure: "Diagnostic heart catheterization" },
    { link: "/drainage_small_joint", image: jointsIcon, procedure: "Drainage small joint" },
    { link: "/xray_hip_pelvis_2views", image: xrayIcon, procedure: "X-Ray Hip/Pelvis (2 views)" },
    { link: "/xray_hip_pelvis_5+views", image: xrayIcon, procedure: "X-Ray Hip/Pelvis (5+ views)" },
    { link: "/ct_cervical_spine_no_contrast", image: ctIcon, procedure: "CT Cervical Spine (no contrast)" },
    { link: "/stitches_under_2.5_cm", image: stitchesIcon, procedure: "Stitches <2.5CM" },
    { link: "/stitches_7.6_12.5_cm", image: stitchesIcon, procedure: "Stitches 7.6-12.5CM" },
    { link: "/drainage_skin_abscess", image: abscessIcon, procedure: "Drainage skin abscess" },
    { link: "/mri_leg_no_contrast", image: mriIcon, procedure: "MRI Leg (no contrast)" },
    { link: "/mri_shoulder_arm_hand_no_contrast", image: mriIcon, procedure: "MRI shoulder/arm/hand (no contrast)" },
    { link: "/pap_smear", image: papSmearIcon, procedure: "Pap Smear" },
    { link: "/std_blood_test", image: stdIcon, procedure: "STD Blood Test" },
    { link: "/ct_head_brain_no_contrast", image: stdIcon, procedure: "CT Head/Brain (no contrast)" },
    { link: "/implantable_cardiac_recorder_loop", image: stdIcon, procedure: "Implantable cardiac recorder loop" },
    { link: "/pt_evaluation", image: stdIcon, procedure: "Physical Therapy Evaluation" },
  ];

  useEffect(() => {
    const fetchProcedurePrices = async () => {
      try {
        const rawData = await fetchData('bills-exposed-database');
        const prices = {};
        const uniqueCities = new Set();
        const uniqueStates = new Set();
        const uniqueInsurances = new Set();

        rawData.forEach(item => {
          const key = item.procedure;
          if (!prices[key]) {
            prices[key] = {};
          }
          if (!prices[key][item.city]) {
            prices[key][item.city] = {};
          }
          if (!prices[key][item.city][item.state]) {
            prices[key][item.city][item.state] = {};
          }
          if (!prices[key][item.city][item.state][item.insurance]) {
            prices[key][item.city][item.state][item.insurance] = [];
          }
          prices[key][item.city][item.state][item.insurance].push(parseFloat(item.amountPaidYou) || 0);

          uniqueCities.add(item.city);
          uniqueStates.add(item.state);
          uniqueInsurances.add(item.insurance);
        });

        // Calculate average prices
        Object.keys(prices).forEach(procedure => {
          Object.keys(prices[procedure]).forEach(city => {
            Object.keys(prices[procedure][city]).forEach(state => {
              Object.keys(prices[procedure][city][state]).forEach(insurance => {
                const avgPrice = Math.round(
                  prices[procedure][city][state][insurance].reduce((sum, price) => sum + price, 0) / 
                  prices[procedure][city][state][insurance].length
                );
                prices[procedure][city][state][insurance] = avgPrice;
              });
            });
          });
        });

        setProcedurePrices(prices);
        
        const sortedCities = Array.from(uniqueCities).sort();
        const sortedStates = Array.from(uniqueStates).sort();
        const sortedInsurances = Array.from(uniqueInsurances).sort();
        
        setCities(['All Cities', ...sortedCities]);
        setStates(['All States', ...sortedStates]);
        setInsurances(['All Insurances', ...sortedInsurances]);

        // Set default selections to the first non-"All" option
        if (sortedCities.length > 0) setSelectedCity(sortedCities[0]);
        if (sortedStates.length > 0) setSelectedState(sortedStates[0]);
        if (sortedInsurances.length > 0) setSelectedInsurance(sortedInsurances[0]);
      } catch (error) {
        console.error('Error fetching procedure prices:', error);
      }
    };

    fetchProcedurePrices();
  }, []);

  const getFilteredPrice = (procedure) => {
    if (!procedurePrices[procedure]) return 'N/A';

    let relevantPrices = [];

    Object.keys(procedurePrices[procedure]).forEach(city => {
      if (selectedCity === 'All Cities' || city === selectedCity) {
        Object.keys(procedurePrices[procedure][city]).forEach(state => {
          if (selectedState === 'All States' || state === selectedState) {
            Object.keys(procedurePrices[procedure][city][state]).forEach(insurance => {
              if (selectedInsurance === 'All Insurances' || insurance === selectedInsurance) {
                relevantPrices.push(procedurePrices[procedure][city][state][insurance]);
              }
            });
          }
        });
      }
    });

    if (relevantPrices.length === 0) return 'N/A';
    const avgPrice = Math.round(relevantPrices.reduce((sum, price) => sum + price, 0) / relevantPrices.length);
    return avgPrice;
  };

  const sortedAndFilteredProcedures = useMemo(() => {
    return procedures
      .filter(proc => proc.procedure.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => a.procedure.localeCompare(b.procedure));
  }, [procedures, searchTerm]);

  const initialItemsToShow = 7;
  const displayedProcedures = showAll ? sortedAndFilteredProcedures : sortedAndFilteredProcedures.slice(0, initialItemsToShow);

  return (
    <Box width="100%" maxWidth="1400px" mx="auto" pt={12} pb={20}>
      {/* Title and Subtitle */}
      <Box mb={8} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" mb={2}>See price estimates for your medical care.</Text>
        <Text fontSize="lg" color="gray.600" mb={6}>
          We are growing this to cover all procedures, providers, and insurance plans in the US. But we need your help. Add your bill.
        </Text>
        
        {/* Search Bar */}
        <Box maxWidth="1200px" mx="auto">
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none" height="100%">
              <SearchIcon color="gray.300" boxSize={6} />
            </InputLeftElement>
            <Input
              placeholder="Search procedures..."
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
                    <Text>City:</Text>
                    <Text>{selectedCity}</Text>
                  </Flex>
                </MenuButton>
                <MenuList maxHeight="200px" overflowY="auto">
                  {cities.map((city, index) => (
                    <MenuItem key={index} onClick={() => setSelectedCity(city)}>{city}</MenuItem>
                  ))}
                </MenuList>
              </Menu>

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
            </Flex>
          </Box>

          {/* Procedures Column */}
          <Box flex={1} pl={8}>
            {/* New title for procedure cards section with info icon */}
            <Flex alignItems="center" mb={4}>
              <Flex alignItems="center" position="relative">
                <Text fontSize="2xl" fontWeight="bold" mr={2}>Procedures</Text>
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
                <Button
                  borderRadius="full"
                  variant="outline"
                  borderColor="var(--color-primary)"
                  color="var(--color-primary)"
                  _hover={{ bg: "var(--color-primary)", color: "white" }}
                  width="100%"
                  height="0"
                  paddingBottom="100%"
                  position="relative"
                >
                  <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    + Add Your Bill
                  </Box>
                </Button>
              </Link>
              {displayedProcedures.map((proc, index) => (
                <ProcedurePill
                  key={index}
                  link={proc.link}
                  image={proc.image}
                  procedure={proc.procedure}
                  price={getFilteredPrice(proc.procedure)}
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
