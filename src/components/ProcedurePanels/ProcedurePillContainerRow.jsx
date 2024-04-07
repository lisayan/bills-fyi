import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import ProcedurePill from './ProcedurePill.jsx';
import '../../styles/procedurepanels.css';
import mriIcon from "../../images/mri_icon.jpg";
import xrayIcon from "../../images/xray_icon.jpg";
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

export default function ProcedurePillContainerRow() {
  return (
    <div className='procedureCardContainer'>
      <Box p={4}>
        <Text fontSize="lg" fontWeight="bold" marginBottom="10px">Medical Bill Amounts</Text>
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
              link="/MRI"
              image={mriIcon}
              procedure="MRI"
            />
            <ProcedurePill
              link="/Xray"
              image={xrayIcon}
              procedure="X-Ray"
            />
            <ProcedurePill
              link="/MRI"
              image={ERIcon}
              procedure="ER Visit"
            />
            <ProcedurePill
              link="/MRI"
              image={IUDIcon}
              procedure="IUD"
            />
            <ProcedurePill
              link="/MRI"
              image={bloodTestIcon}
              procedure="Blood Test"
            />
            <ProcedurePill
              link="/MRI"
              image={cardioIcon}
              procedure="Cardiologist"
            />
            <ProcedurePill
              link="/MRI"
              image={acneIcon}
              procedure="Acne"
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
              link="/MRI"
              image={PTIcon}
              procedure="PT"
            />
            <ProcedurePill
              link="/MRI"
              image={ambulanceIcon}
              procedure="Ambulance"
            />
            <ProcedurePill
              link="/MRI"
              image={childBirthIcon}
              procedure="Childbirth"
            />
            <ProcedurePill
              link="/MRI"
              image={mammogramIcon}
              procedure="Mammogram"
            />
            <ProcedurePill
              link="/MRI"
              image={colonoscopyIcon}
              procedure="Colonoscopy"
            />
            <ProcedurePill
              link="/MRI"
              image={virtualIcon}
              procedure="Virtual Visit"
            />
            <ProcedurePill
              link="/MRI"
              image={primaryCareIcon}
              procedure="Primary Care"
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
              link="/MRI"
              image={surgeryIcon}
              procedure="Surgery"
            />
            <ProcedurePill
              link="/MRI"
              image={lipFillerIcon}
              procedure="Lip Filler"
            />
            <ProcedurePill
              link="/MRI"
              image={botoxIcon}
              procedure="Botox"
            />
            <ProcedurePill
              link="/MRI"
              image={stitchesIcon}
              procedure="Stitches"
            />
            <ProcedurePill
              link="/MRI"
              image={heartSurgeryIcon}
              procedure="Heart Surgery"
            />
            <ProcedurePill
              link="/MRI"
              image={papSmearIcon}
              procedure="Pap Smear"
            />
            <ProcedurePill
              link="/MRI"
              image={chemoIcon}
              procedure="Chemotherapy"
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
              link="/MRI"
              image={kneeSurgeryIcon}
              procedure="Knee Surgery"
            />
            <ProcedurePill
              link="/MRI"
              image={hospitalStayIcon}
              procedure="Hospital Stay"
            />
            <ProcedurePill
              link="/MRI"
              image={rootCanalIcon}
              procedure="Root Canal"
            />
            <ProcedurePill
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
            />
          </Stack>
        </div>
      </Box>
    </div>
  )
}

