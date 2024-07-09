import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
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

export default function ProcedurePillContainerRow() {
  return (
    <div className='procedureCardContainer'>
      <Box p={4}>
        <Text fontSize="30px" fontWeight="bold" marginBottom="10px" marginLeft="20px">Find a treatment</Text>
        <Text fontSize="18px" marginLeft="20px" marginBottom="20px">Choose a condition to learn more, see prices, and get started. Help us improve our data by adding your bill.</Text>
        <Link to="/addbillpage">
          <Button
            borderRadius="20px"
            variant="outline"
            borderStyle="dashed"
            borderColor="#1B263B"
            textColor="#1B263B"
            p={3}
            px={5}
            width="200px"
            height="110px"
            marginLeft="20px"
          >+ Add Your Bill</Button>
        </Link>
        <div className="procedureCardSection">
          <Stack
            spacing={6}
            align="flex-start"
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
            className="procedureCardRow"
          >
            <ProcedurePill
              link="/Mammogram"
              image={mammogramIcon}
              procedure="Mammogram"
            />
            <ProcedurePill
              link="/MRI_brain"
              image={mriIcon}
              procedure="MRI Brain (no contrast)"
            />
            <ProcedurePill
              link="/ct_abdomen_pelvis_contrast"
              image={ctIcon}
              procedure="CT Abdomen/Pelvis (contrast)"
            />
            <ProcedurePill
              link="/ct_chest_contrast"
              image={ctIcon}
              procedure="CT Chest (contrast)"
            />
            <ProcedurePill
              link="/xray_chest"
              image={xrayIcon}
              procedure="X-Ray Chest"
            />
            <ProcedurePill
              link="/xray_foot"
              image={xrayIcon}
              procedure="X-Ray Foot"
            />
            <ProcedurePill
              link="/colonoscopy"
              image={colonoscopyIcon}
              procedure="Colonoscopy"
            />
          </Stack>
          <Stack
            spacing={6}
            align="flex-start"
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
            className="procedureCardRow"
          >
            <ProcedurePill
              link="/pt_therapeutic_exercise"
              image={PTIcon}
              procedure="Physical Therapy Therapeutic Exercise"
            />
            <ProcedurePill
              link="/tonsils_under_12"
              image={tonsilsIcon}
              procedure="Tonsils Removal (under 12)"
            />
            <ProcedurePill
              link="/tonsils_over_12"
              image={tonsilsIcon}
              procedure="Tonsils Removal (over 12)"
            />
            <ProcedurePill
              link="/implantable_cardiac_recorder_loop"
              image={cardiacRecorderIcon}
              procedure="Cardiac Recorder Loop"
            />
            <ProcedurePill
              link="/surgical_drainage_hematoma_seroma"
              image={bruisesIcon}
              procedure="Surgical drainage of hematoma/seroma"
            />
            <ProcedurePill
              link="/diagnostic_heart_catheterization"
              image={catheterIcon}
              procedure="Diagnostic heart catheterization"
            />
            <ProcedurePill
              link="/drainage_small_joint"
              image={jointsIcon}
              procedure="Drainage small joint"
            />
          </Stack>
          <Stack
            spacing={6}
            align="flex-start"
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
            className="procedureCardRow"
          >
            <ProcedurePill
              link="/xray_hip_pelvis_2views"
              image={xrayIcon}
              procedure="X-Ray Hip/Pelvis (2 views)"
            />
            <ProcedurePill
              link="/xray_hip_pelvis_5+views"
              image={xrayIcon}
              procedure="X-Ray Hip/Pelvis (5+ views)"
            />
            <ProcedurePill
              link="/ct_cervical_spine_no_contrast"
              image={ctIcon}
              procedure="CT Cervical Spine (no contrast)"
            />
            <ProcedurePill
              link="/stitches_under_2.5_cm"
              image={stitchesIcon}
              procedure="Stitches <2.5CM"
            />
            <ProcedurePill
              link="/stitches_7.6_12.5_cm"
              image={stitchesIcon}
              procedure="Stitches 7.6-12.5CM"
            />
            <ProcedurePill
              link="/drainage_skin_abscess"
              image={abscessIcon}
              procedure="Drainage skin abscess"
            />
            <ProcedurePill
              link="/mri_leg_no_contrast"
              image={mriIcon}
              procedure="MRI Leg (no contrast)"
            />
          </Stack>
          <Stack
            spacing={6}
            align="flex-start"
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
            className="procedureCardRow"
          >
            <ProcedurePill
              link="/mri_shoulder_arm_hand_no_contrast"
              image={mriIcon}
              procedure="MRI shoulder/arm/hand (no contrast)"
            />
            <ProcedurePill
              link="/pap_smear"
              image={papSmearIcon}
              procedure="Pap Smear"
            />
            <ProcedurePill
              link="/std_blood_test"
              image={stdIcon}
              procedure="STD Blood Test"
            />
            {/* <ProcedurePill
              link="/MRI"
              image={dentalCleaningIcon}
              procedure="Dental Visit"
            />
            <ProcedurePill
              link="/MRI"
              image={stdIcon}
              procedure="STD"
            />
            <ProcedurePill
              link="/MRI"
              image={hairTransplantIcon}
              procedure="Hair Transplant"
            />
            <ProcedurePill
              link="/MRI"
              image={dialysisIcon}
              procedure="Dialysis"
            /> */}
          </Stack>
        </div>
      </Box>
    </div>
  )
}

