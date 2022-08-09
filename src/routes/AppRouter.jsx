import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutScreen from '../pages/AboutScreen'
import IndexScreen from '../pages/IndexScreen'
import PrivacyPolicy from '../pages/PrivacyPolicy'
import ServicesScreen from '../pages/ServicesScreen'
import WorkScreen from '../pages/WorkScreen'
import ReactGA from 'react-ga';

ReactGA.initialize("G-MS3CLZ3JKN"); // OUR_TRACKING_ID

const AppRouter = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
        <Routes>
            <Route path="/" element={<IndexScreen/>}/>
            <Route path="/about" element={<AboutScreen/>}/>
            <Route path="/work" element={<WorkScreen/>}/>
            <Route path="/services" element={<ServicesScreen/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter