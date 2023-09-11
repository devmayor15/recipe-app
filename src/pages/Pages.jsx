import React, { lazy, Suspense } from "react";
import Searched from "./Searched";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("./Home"));
const Cuisine = lazy(() => import("./Cuisine"));
const Recipe = lazy(() => import("./Recipe"));

const Pages = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes location={location} key={location.path}>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default Pages;
