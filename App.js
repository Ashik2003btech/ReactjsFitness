import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import NameIdForm from './components/NameIdForm';
import Footer from './components/Footer'; // Import Footer
import GetStarted from './components/GetStarted';
import BMICalculator from './components/BMICalculator';
//rendering the <Footer />  
function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nameid" element={<NameIdForm />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/bmi" element={<BMICalculator />} />
        </Routes>
      </div>

      <Footer /> {/* Always rendered at the bottom */}
    </div>
  );
}

export default App;
