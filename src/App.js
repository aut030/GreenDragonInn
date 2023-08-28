import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Quests from './components/pages/Quests';
import Careers from './components/pages/Careers';
import Shop from './components/pages/Shop';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path='/GreenDragonInn' exact Component={Home} />
          <Route path='/GreenDragonInn/about' exact Component={About} />
          <Route path='/GreenDragonInn/quests' exact Component={Quests} />
          <Route path='/GreenDragonInn/shop' exact Component={Shop} />
          <Route path='/GreenDragonInn/sign-up' exact Component={SignUp} />
          <Route path='/GreenDragonInn/careers' exact Component={Careers} />
        </Routes>
      </Router>
    </>
  );
}

export default App;