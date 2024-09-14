import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text, Flex, Grid, Center, Input } from '@chakra-ui/react';
import ProcedurePill from './ProcedurePill.jsx';
import '../../styles/procedurepanels.css';
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
import { fetchData } from '../DisplayData/AWS_DDB.jsx';

export default function ProcedurePillContainerRow() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [procedurePrices, setProcedurePrices] = useState({});

  const procedures = [
    { link: "/Mammogram", image: mammogramIcon, procedure: "Mammogram", price: 250 },
    { link: "/MRI_brain", image: mriIcon, procedure: "MRI Brain (no contrast)", price: 1200 },
    { link: "/ct_abdomen_pelvis_contrast", image: ctIcon, procedure: "CT Abdomen/Pelvis (contrast)", price: 800 },
    { link: "/ct_chest_contrast", image: ctIcon, procedure: "CT Chest (contrast)", price: 700 },
    { link: "/xray_chest", image: xrayIcon, procedure: "X-Ray Chest", price: 150 },
    { link: "/xray_foot", image: xrayIcon, procedure: "X-Ray Foot", price: 120 },
    { link: "/colonoscopy", image: colonoscopyIcon, procedure: "Colonoscopy", price: 1500 },
    { link: "/pt_therapeutic_exercise", image: PTIcon, procedure: "Physical Therapy Therapeutic Exercise", price: 100 },
    { link: "/tonsils_under_12", image: tonsilsIcon, procedure: "Tonsils Removal (under 12)", price: 3000 },
    { link: "/tonsils_over_12", image: tonsilsIcon, procedure: "Tonsils Removal (over 12)", price: 3500 },
    { link: "/surgical_drainage_hematoma_seroma", image: bruisesIcon, procedure: "Surgical drainage of hematoma/seroma", price: 1000 },
    { link: "/diagnostic_heart_catheterization", image: catheterIcon, procedure: "Diagnostic heart catheterization", price: 5000 },
    { link: "/drainage_small_joint", image: jointsIcon, procedure: "Drainage small joint", price: 800 },
    { link: "/xray_hip_pelvis_2views", image: xrayIcon, procedure: "X-Ray Hip/Pelvis (2 views)", price: 200 },
    { link: "/xray_hip_pelvis_5+views", image: xrayIcon, procedure: "X-Ray Hip/Pelvis (5+ views)", price: 300 },
    { link: "/ct_cervical_spine_no_contrast", image: ctIcon, procedure: "CT Cervical Spine (no contrast)", price: 600 },
    { link: "/stitches_under_2.5_cm", image: stitchesIcon, procedure: "Stitches <2.5CM", price: 200 },
    { link: "/stitches_7.6_12.5_cm", image: stitchesIcon, procedure: "Stitches 7.6-12.5CM", price: 400 },
    { link: "/drainage_skin_abscess", image: abscessIcon, procedure: "Drainage skin abscess", price: 500 },
    { link: "/mri_leg_no_contrast", image: mriIcon, procedure: "MRI Leg (no contrast)", price: 1000 },
    { link: "/mri_shoulder_arm_hand_no_contrast", image: mriIcon, procedure: "MRI shoulder/arm/hand (no contrast)", price: 1100 },
    { link: "/pap_smear", image: papSmearIcon, procedure: "Pap Smear", price: 150 },
    { link: "/std_blood_test", image: stdIcon, procedure: "STD Blood Test", price: 200 },
    { link: "/ct_head_brain_no_contrast", image: stdIcon, procedure: "CT Head/Brain (no contrast)", price: 500 },
    { link: "/implantable_cardiac_recorder_loop", image: stdIcon, procedure: "Implantable cardiac recorder loop", price: 6000 },
    { link: "/pt_evaluation", image: stdIcon, procedure: "Physical Therapy Evaluation", price: 150 },
  ];

  useEffect(() => {
    const fetchProcedurePrices = async () => {
      try {
        const rawData = await fetchData('bills-exposed-database');
        const prices = {};
        rawData.forEach(item => {
          if (!prices[item.procedure]) {
            prices[item.procedure] = [];
          }
          prices[item.procedure].push(parseFloat(item.amountPaidYou) || 0);
        });

        const averagePrices = Object.keys(prices).reduce((acc, procedure) => {
          const avgPrice = prices[procedure].reduce((sum, price) => sum + price, 0) / prices[procedure].length;
          acc[procedure] = Math.round(avgPrice);
          return acc;
        }, {});

        setProcedurePrices(averagePrices);
      } catch (error) {
        console.error('Error fetching procedure prices:', error);
      }
    };

    fetchProcedurePrices();
  }, []);

  const sortedAndFilteredProcedures = useMemo(() => {
    return procedures
      .map(proc => ({
        ...proc,
        price: procedurePrices[proc.procedure] || proc.price
      }))
      .sort((a, b) => a.procedure.localeCompare(b.procedure))
      .filter(proc =>
        proc.procedure.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [procedures, procedurePrices, searchTerm]);

  const initialItemsToShow = 7; // Show 9 procedures by default

  const displayedProcedures = showAll ? sortedAndFilteredProcedures : sortedAndFilteredProcedures.slice(0, initialItemsToShow);

  const initialItemsToShow = 7; // Show 9 procedures by default

  const displayedProcedures = showAll ? sortedAndFilteredProcedures : sortedAndFilteredProcedures.slice(0, initialItemsToShow);

  return (
    <div className='procedureCardContainer'>
      <Box p={4}>
        <Flex direction="column" alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" mb={4} textAlign="center">How much will it cost you to get treated?</Text>
          <Text fontSize="lg" mb={4} textAlign="center" maxWidth="900px" mx="auto">
            Here are some cash estimates for procedures in Boston, MA. Our plan is
            to grow this to cover all procedures in the US for all insurance plans.
          </Text>
          <Input
            placeholder="Search procedures..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            width="100%"
            maxWidth="500px"
            mb={8}
          />
        </Flex>
        <div className="procedureCardSection">
          <Grid templateColumns="repeat(auto-fill, minmax(175px, 1fr))" gap={8}>
            <Link to="/addbillpage">
              <Button
                borderRadius="full"
                variant="outline"
                borderColor="var(--color-primary)"
                color="var(--color-primary)"
                _hover={{ bg: "var(--color-primary)", color: "white" }}
                p={3}
                px={5}
                width="175px"
                height="175px"
              >+ Add Your Bill</Button>
            </Link>
            {displayedProcedures.map((proc, index) => (
              <ProcedurePill
                key={index}
                link={proc.link}
                image={proc.image}
                procedure={proc.procedure}
                price={proc.price}
              />
            ))}
          </Grid>
        </div>
        {!showAll && sortedAndFilteredProcedures.length > initialItemsToShow && (
          <Center mt={8}>
            <Button
              onClick={() => setShowAll(true)}
              borderColor="var(--color-primary)"
              color="var(--color-primary)"
              variant="outline"
              _hover={{ bg: "var(--color-primary)", color: "white" }}
            >
              Show More
            </Button>
          </Center>
        )}
      </Box>
    </div>
  )
}
