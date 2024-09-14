import React, { useState, useEffect } from 'react';
import { insuranceTabs, procedureTabs, providerTabs } from '../../data/data.jsx';
import BasicTable from './DataTable/ParentDataTable.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import HomePageTabs from './HomePageTabs/Tabs.jsx';
import {colonoscopyBulletPoints} from '../../procedureDescriptions/Colonoscopy.jsx';
import {xrayBulletPoints} from '../../procedureDescriptions/Xray.jsx';
import {ctAbdomenPelvisContrastBulletPoints} from '../../procedureDescriptions/CT_abdomen_pelvis_contrast.jsx';
import {ctCervicalSpineNoContrastBulletPoints} from '../../procedureDescriptions/CT_cervical_spine_no_contrast.jsx';
import {ctChestContrastBulletPoints} from '../../procedureDescriptions/CT_chest_contrast.jsx';
import {ctHeadBrainNoContrastBulletPoints} from '../../procedureDescriptions/CT_head_brain_no_contrast.jsx';
import {diagnosticHeartCatheterizationBulletPoints} from '../../procedureDescriptions/Diagnostic_heart_catheterization.jsx';
import {drainageSkinAbscessBulletPoints} from '../../procedureDescriptions/Drainage_skin_abscess.jsx';
import {drainageSmallJointBulletPoints} from '../../procedureDescriptions/Drainage_small_joint.jsx';
import {implantableCardiacRecorderLoopBulletPoints} from '../../procedureDescriptions/Implantable_cardiac_recorder_loop.jsx';
import {mammogramBulletPoints} from '../../procedureDescriptions/Mammogram.jsx';
import {mriBrainBulletPoints} from '../../procedureDescriptions/MRI_brain.jsx';
import {mriLegNoContrastBulletPoints} from '../../procedureDescriptions/MRI_leg_no_contrast.jsx';
import {mriShoulderArmHandNoContrastBulletPoints} from '../../procedureDescriptions/MRI_shoulder_arm_hand_no_contrast.jsx';
import {papSmearBulletPoints} from '../../procedureDescriptions/Pap_smear.jsx';
import {ptEvaluationBulletPoints} from '../../procedureDescriptions/PT_evaluation.jsx';
import {ptTherapeuticExerciseBulletPoints} from '../../procedureDescriptions/PT_therapeutic_exercise.jsx';
import {stdBloodTestBulletPoints} from '../../procedureDescriptions/STD_blood_test.jsx';
import {stitches7To12CMBulletPoints} from '../../procedureDescriptions/Stitches_7.6_12.5_cm.jsx';
import {stitchesUnder2Point5CMBulletPoints} from '../../procedureDescriptions/Stitches_under_2.5cm.jsx';
import {surgicalDrainageHematomaSeromaBulletPoints} from '../../procedureDescriptions/Surgical_drainage_hematoma_seroma.jsx';
import {tonsilsOver12BulletPoints} from '../../procedureDescriptions/Tonsils_over_12.jsx';
import {tonsilsUnder12BulletPoints} from '../../procedureDescriptions/Tonsils_under_12.jsx';
import {xrayChestBulletPoints} from '../../procedureDescriptions/Xray_chest.jsx';
import {xrayFootBulletPoints} from '../../procedureDescriptions/Xray_foot.jsx';
import {xrayHipPelvis2ViewsBulletPoints} from '../../procedureDescriptions/Xray_hip_pelvis_2_views.jsx';
import {xrayHipPelvis5ViewsBulletPoints} from '../../procedureDescriptions/XRay_hip_pelvis_5+views.jsx';
import BoxPlotComponent from './SummaryBoxPlots/Boxplots.jsx';
import { dataObject } from '../../data/data.jsx';
import PieChart from './SummaryPieCharts/PieCharts.jsx';
import '../../styles/procedureSummary.css';
import '../../styles/plots.css';
import { fetchData } from './AWS_DDB.jsx';
import mriImage from '../../images/MRI.jpg'
import mriImage2 from '../../images/MRI_2.jpg'
import xrayImage from '../../images/Xray.jpg'

export default function DisplayData({procedureType}) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(() => {
    const index = procedureTabs.findIndex(tab => tab.label.toLowerCase() === procedureType.toLowerCase());
    return index !== -1 ? index : 0; // Default to 0 if not found
  });
  const [selectedSubTabIndex, setSelectedSubTabIndex] = useState(0);
  const [selectedSubSubTabIndex, setSelectedSubSubTabIndex] = useState(0);
  const [procedureDataTable, setProcedureDataTable] = useState([]);
  const [combinedDataTable, setCombinedDataTable] = useState([]);

  const handleTabChange = (index, tab = "") => {
    if (tab === "procedure") {
      setSelectedTabIndex(index);
    } else if (tab === "insurance") {
      setSelectedSubTabIndex(index);
    } else if (tab === "provider") {
      setSelectedSubSubTabIndex(index);
    }
  };

  const handleScrollDown = () => {
    const tabsElement = document.querySelector('.homePageTabs');
    window.scrollTo({
      top: 650, // Change this value to the number of pixels you want to scroll down
      behavior: "smooth" // Add smooth scrolling behavior
    });
  };

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const rawData = await fetchData('bills-exposed-database');
        const procedureFilteredData = rawData
          .filter(item => 
            item.procedure?.toLowerCase() === procedureType?.toLowerCase()
          )
          .map(item => ({
            procedure: item.procedure,
            insurance: item.insurance,
            oop_payment: item.amountPaidYou,
            insurance_payment: item.amountPaidInsurance,
            provider: item.provider,
          }));
        setProcedureDataTable(procedureFilteredData);

        const combinedFilteredData = rawData
          .filter(item => 
            item.procedure === procedureTabs[selectedTabIndex]?.label && 
            item.insurance === insuranceTabs[selectedSubTabIndex]?.label && 
            item.provider === providerTabs[selectedSubSubTabIndex]?.label
          )
          .map(item => ({
            procedure: item.procedure,
            insurance: item.insurance,
            oop_payment: item.amountPaidYou,
            insurance_payment: item.amountPaidInsurance,
            provider: item.provider,
          }));
        setCombinedDataTable(combinedFilteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDataAsync();
  }, [selectedTabIndex, selectedSubTabIndex, selectedSubSubTabIndex]);

  const amountPaidYouData = procedureDataTable.map(item => item.oop_payment);
  const sum = amountPaidYouData.reduce((a, b) => a + b, 0);
  const avgProcedureCost = (sum / amountPaidYouData.length) || 0;

  const procedureBulletPoints = {
    'xray': xrayBulletPoints,
    'colonoscopy': colonoscopyBulletPoints,
    'ct abdomen/pelvis (contrast)': ctAbdomenPelvisContrastBulletPoints,
    'ct cervical spine (no contrast)': ctCervicalSpineNoContrastBulletPoints,
    'ct chest (contrast)': ctChestContrastBulletPoints,
    'ct head/brain (no contrast)': ctHeadBrainNoContrastBulletPoints,
    'diagnostic heart catheterization': diagnosticHeartCatheterizationBulletPoints,
    'drainage skin abscess': drainageSkinAbscessBulletPoints,
    'drainage small joint': drainageSmallJointBulletPoints,
    'cardiac recorder loop': implantableCardiacRecorderLoopBulletPoints,
    'mammogram': mammogramBulletPoints,
    'mri brain (no contrast)': mriBrainBulletPoints,
    'mri leg (no contrast)': mriLegNoContrastBulletPoints,
    'mri shoulder/arm/hand (no contrast)': mriShoulderArmHandNoContrastBulletPoints,
    'pap smear': papSmearBulletPoints,
    'physical therapy evaluation': ptEvaluationBulletPoints,
    'physical therapy therapeutic exercise': ptTherapeuticExerciseBulletPoints,
    'std blood test': stdBloodTestBulletPoints,
    'stitches 7.6-12.5cm': stitches7To12CMBulletPoints,
    'stitches <2.5cm': stitchesUnder2Point5CMBulletPoints,
    'surgical drainage of hematoma/seroma': surgicalDrainageHematomaSeromaBulletPoints,
    'tonsils removal (over 12)': tonsilsOver12BulletPoints,
    'tonsils removal (under 12)': tonsilsUnder12BulletPoints,
    'x-ray chest': xrayChestBulletPoints,
    'x-ray foot': xrayFootBulletPoints,
    'x-ray hip/pelvis (2 views)': xrayHipPelvis2ViewsBulletPoints,
    'x-ray hip/pelvis (5+ views)': xrayHipPelvis5ViewsBulletPoints
  };
  const procedureImages = {
    'mri': { src: mriImage2, alt: "MRI" },
    'xray': { src: xrayImage, alt: "Xray" },
    'colonoscopy': { src: mriImage2, alt: "Colonoscopy" },
    'ct abdomen/pelvis (contrast)': { src: mriImage2, alt: "CT Abdomen/Pelvis (contrast)" },
    'ct cervical spine (no contrast)': { src: mriImage2, alt: "CT Cervical Spine No Contrast" },
    'ct chest (contrast)': { src: mriImage2, alt: "CT Chest (contrast)" },
    'ct head/brain (no contrast)': { src: mriImage2, alt: "CT Head (no contrast)" },
    'diagnostic heart catheterization': { src: mriImage2, alt: "Diagnostic Heart Catheterization" },
    'drainage skin abscess': { src: mriImage2, alt: "Drainage Skin Abscess" },
    'drainage small joint': { src: mriImage2, alt: "Drainage Small Joint" },
    'cardiac recorder loop': { src: mriImage2, alt: "Implantable Cardiac Recorder Loop" },
    'mammogram': { src: mriImage2, alt: "Mammogram" },
    'mri brain (no contrast)': { src: mriImage2, alt: "MRI Brain (no contrast)" },
    'mri leg (no contrast)': { src: mriImage2, alt: "MRI Leg (no contrast)" },
    'mri shoulder/arm/hand (no contrast)': { src: mriImage2, alt: "MRI Shoulder (arm and hand) (no contrast)" },
    'pap smear': { src: mriImage2, alt: "Pap Smear" },
    'physical therapy evaluation': { src: mriImage2, alt: "Physical Therapy Evaluation" },
    'physical therapy therapeutic exercise': { src: mriImage2, alt: "Physical Therapy (Therapeutic Exercise)" },
    'std blood test': { src: mriImage2, alt: "STD Blood Test" },
    'stitches 7.6-12.5cm': { src: mriImage2, alt: "Stitches 7.6-12.5 cm" },
    'stitches <2.5cm': { src: mriImage2, alt: "Stitches <2.5 cm" },
    'surgical drainage of hematoma/seroma': { src: mriImage2, alt: "Surgical Drainage Hematoma/Seroma" },
    'tonsils removal (over 12)': { src: mriImage2, alt: "Tonsils Removal (over 12)" },
    'tonsils removal (under 12)': { src: mriImage2, alt: "Tonsils Removal (under 12)" },
    'x-ray chest': { src: mriImage2, alt: "Xray Chest" },
    'x-ray foot': { src: mriImage2, alt: "Xray Foot" },
    'x-ray hip/pelvis (2 views)': { src: mriImage2, alt: "Xray Hip/Pelvis (2 Views)" },
    'x-ray hip/pelvis (5+ views)': { src: mriImage2, alt: "Xray Hip/Pelvis (5+ Views)" }
  };

  const bulletPoints = procedureBulletPoints[procedureType.toLowerCase()] || [];

  const columns = [
    {
      Header: 'Procedure',
      accessor: 'procedure',
    },
    {
      Header: 'Insurance',
      accessor: 'insurance',
    },
    {
      Header: 'Out-of-pocket payment',
      accessor: 'oop_payment',
    },
    {
      Header: 'Insurance payment',
      accessor: 'insurance_payment',
    },
    {
      Header: 'Provider',
      accessor: 'provider',
    },
  ];

  return (
    <div style={{ paddingTop: '150px' }}> {/* Add padding to prevent overlap with NavBar */}
      <div className='parentContainer'>
      {(() => {
        const currentProcedure = procedureType.toLowerCase();
        
        if (procedureImages[currentProcedure]) {
          return (
            <div className="imageContainer">
              <div>
                <img 
                  src={procedureImages[currentProcedure].src} 
                  alt={procedureImages[currentProcedure].alt} 
                  className="procedureImageContainer" 
                />
              </div>
            </div>
          );
        } else {
          return (
            <div>
              {/* Content for all other cases */}
            </div>
          );
        }
      })()}
        <div className="textParentContainer">
          <div className="textTitleContainer">
            <p>{procedureType || 'Unknown Procedure'}</p>
          </div>
          <div className="priceBoxContainer">
            <div className="priceBoxContainerLeftColumn">
              <FontAwesomeIcon icon={faUserDoctor} />
            </div>
            <div className="priceBoxContainerLeftCenterColumn">
              <p>You Pay</p>
            </div>
            <div className="priceBoxContainerRightCenterColumn">
              <p>${avgProcedureCost.toFixed(2)}</p>
            </div>
            <div className="priceBoxContainerRightColumn">
              <p>(average cost*)</p>
            </div>
          </div>
          <div className="textAsteriskContainer">
            <p>{'* Average cost across all insurance carriers and providers.'}</p>
          </div>
          {bulletPoints[0]?.content.map((point, index) => (
            <div key={index} className="bulletParentContainer">
              <div className="bulletContainer">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
              <div className="bulletContainer">
                <p>{point}</p>
              </div>
            </div>
          ))}
          <div className="scrollDownContainer">
            <button className="buttonStyle" onClick={handleScrollDown} style={{ color: 'white' }}>Add to Cart</button>
          </div>
        </div>
      </div>
      {/* <div>
        <HomePageTabs
          selectedTabIndex={selectedTabIndex}
          selectedSubTabIndex={selectedSubTabIndex}
          selectedSubSubTabIndex={selectedSubSubTabIndex}
          onTabChange={handleTabChange}
        />
      </div> */}
      {/* <div className='parentContainer'>
        <div>
          <div className='boxContainer'>
            <BoxPlotComponent
              selectedTabIndex={selectedTabIndex}
              selectedSubTabIndex={selectedSubTabIndex}
              selectedSubSubTabIndex={selectedSubSubTabIndex}
              data={amountPaidYouData}
            />
            <BasicTable columns={columns} data={combinedDataTable} />
          </div>
        </div>
        <div>
          <div className='boxContainer'>
            <PieChart
              selectedTabIndex={selectedTabIndex}
              selectedSubTabIndex={selectedSubTabIndex}
              selectedSubSubTabIndex={selectedSubSubTabIndex}
              data={procedureDataTable}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}