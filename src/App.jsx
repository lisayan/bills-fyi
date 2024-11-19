import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import AddBill from './pages/AddBill';
import Colonoscopy from './pages/Colonoscopy'
import CTAbdomenPelvisContrast from './pages/CT_abdomen_pelvis_contrast';
import CTCervicalSpineNoContrast from "./pages/CT_cervical_spine_no_contrast";
import CTChestContrast from './pages/CT_chest_contrast';
import CTHeadBrainNoContrast from "./pages/CT_head_brain_no_contrast";
import DiagnosticHeartCatheterization from "./pages/Diagnostic_heart_catheterization";
import DrainageSkinAbscess from "./pages/Drainage_skin_abscess";
import DrainageSmallJoint from "./pages/Drainage_small_joint";
import ImplantableCardiacRecorderLoop from "./pages/Implantable_cardiac_recorder_loop";
import Mammogram from './pages/Mammogram';
import MRI_brain from './pages/MRI_brain';
import MRILegNoContrast from "./pages/MRI_leg_no_contrast";
import MRIShoulderArmHandNoContrast from "./pages/MRI_shoulder_arm_hand_no_contrast";
import PapSmear from "./pages/Pap_smear";
import PTEvaluation from "./pages/PT_evaluation";
import PTTherapeuticExercise from "./pages/PT_therapeutic_exercise";
import ShoppingCart from "./pages/ShoppingCart";
import STDBloodTest from "./pages/STD_blood_test";
import Stitches7To12CM from "./pages/Stitches_7.6_12.5_cm";
import StitchesUnder2Point5CM from "./pages/Stitches_under_2.5cm";
import SurgicalDrainageHematomaSeroma from "./pages/Surgical_drainage_hematoma_seroma";
import TonsilsOver12 from "./pages/Tonsils_over_12";
import TonsilsUnder12 from "./pages/Tonsils_under_12";
import Xray from './pages/Xray';
import XRayChest from './pages/Xray_chest'
import XRayFoot from './pages/Xray_foot'
import XRayHipPelvis2Views from "./pages/Xray_hip_pelvis_2_views";
import XRayHipPelvis5Views from "./pages/XRay_hip_pelvis_5+views";
import About from './pages/About';
import JoinForm from './pages/JoinForm';
import TermsOfService from './pages/Terms';
import Privacy from './pages/Privacy';
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<ShoppingCart/>} />
          <Route path="/addbillpage" element={<AddBill/>}/>
          <Route path="/xray_chest" element={<XRayChest/>}/>
          <Route path="/ct_cervical_spine_no_contrast" element={<CTCervicalSpineNoContrast/>}/>
          <Route path="/ct_chest_contrast" element={<CTChestContrast/>}/>
          <Route path="/ct_abdomen_pelvis_contrast" element={<CTAbdomenPelvisContrast/>}/>
          <Route path="/ct_head_brain_no_contrast" element={<CTHeadBrainNoContrast/>}/>
          <Route path="/colonoscopy" element={<Colonoscopy/>}/>
          <Route path="/diagnostic_heart_catheterization" element={<DiagnosticHeartCatheterization/>}/>
          <Route path="/drainage_skin_abscess" element={<DrainageSkinAbscess/>}/>
          <Route path="/drainage_small_joint" element={<DrainageSmallJoint/>}/>
          <Route path="/implantable_cardiac_recorder_loop" element={<ImplantableCardiacRecorderLoop/>}/>
          <Route path="/mammogram" element={<Mammogram/>}/>
          <Route path="/mri_brain" element={<MRI_brain/>}/>
          <Route path="/mri_leg_no_contrast" element={<MRILegNoContrast/>}/>
          <Route path="/mri_shoulder_arm_hand_no_contrast" element={<MRIShoulderArmHandNoContrast/>}/>
          <Route path="/pap_smear" element={<PapSmear/>}/>
          <Route path="/pt_evaluation" element={<PTEvaluation/>}/>
          <Route path="/pt_therapeutic_exercise" element={<PTTherapeuticExercise/>}/>
          <Route path="/std_blood_test" element={<STDBloodTest/>}/>
          <Route path="/stitches_7.6_12.5_cm" element={<Stitches7To12CM/>}/>
          <Route path="/stitches_under_2.5_cm" element={<StitchesUnder2Point5CM/>}/>
          <Route path="/surgical_drainage_hematoma_seroma" element={<SurgicalDrainageHematomaSeroma/>}/>
          <Route path="/tonsils_over_12" element={<TonsilsOver12/>}/>
          <Route path="/tonsils_under_12" element={<TonsilsUnder12/>}/>
          <Route path="/xray_foot" element={<XRayFoot/>}/>
          <Route path="/xray_hip_pelvis_2views" element={<XRayHipPelvis2Views/>}/>
          <Route path="/xray_hip_pelvis_5+views" element={<XRayHipPelvis5Views/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/join" element={<JoinForm/>}/>
          <Route path="/terms" element={<TermsOfService/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
        </Routes>
      </Router>
    </>
  )
};
