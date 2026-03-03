import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";

import { ThemeProvider } from "./Themecontext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavbarComponent />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <FooterComponent />
      </Router>
    </ThemeProvider>
  );
}

export default App;