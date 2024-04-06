import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import Home from './pages/Home';
import AddBill from './pages/AddBill';
import MRI from './pages/MRI';
import Xray from './pages/Xray';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addbillpage" element={<AddBill/>}/>
        <Route path="/mri" element={<MRI/>}/>
        <Route path="/xray" element={<Xray/>}/>
      </Routes>
    </Router>
  )
};
