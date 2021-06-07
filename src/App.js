import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import AnimatedCursor from "react-animated-cursor"
import { Switch, Route, BrowserRouter, useLocation } from "react-router-dom";
import { css, jsx, keyframes } from "@emotion/react";
import facepaint from "facepaint";
import Contact from './Pages/Contact';
import SkillsPage from './Pages/skillsPage';
import HomePage from './Pages/HomePage';
import { AnimatePresence, motion } from "framer-motion";
import ViewportProvider from './Components/ViewportProvider'
import { useViewport } from './Components/ViewportProvider'



function App(props) {

  const location = useLocation();
  const { width, height } = useViewport();


  return (
    <ViewportProvider>
      <div
      // style={{ background: 'black', position: 'relative', height: height, width: width, overflow: 'none' }}
      >
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          < Switch location={location} key={location.pathname}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/skills" component={SkillsPage} />
            <Route exact path="/contact" component={Contact} />
          </Switch >
        </AnimatePresence>
      </div>
    </ViewportProvider>

  );
}

export default App;




const breakpoints = [500, 1025, 1400]

const mq = facepaint([
  `@media(min-width: ${breakpoints.slice(0, 1)}px)`,
  `@media(min-width: ${breakpoints.slice(1, 2)}px)`,
  `@media(min-width: ${breakpoints.slice(2, 3)}px)`
])

