import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';import ReactGA from 'react-ga';

function App() {
  const TRACKING_ID = "G-MS3CLZ3JKN"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

  return (
    <AppRouter/>
  );
}

export default App;
