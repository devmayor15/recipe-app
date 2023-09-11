import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Recipe from './Recipe';
import Searched from './Searched';
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.path}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
       </Routes>
    </AnimatePresence>
       
  )
}

export default Pages