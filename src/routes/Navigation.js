import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Company } from '../components/about/Company';
import { Vision } from '../components/about/Vision';
import { Contact } from '../components/Contact';
import { Home } from '../components/Home/Home';
import { AdvanceBroker } from '../components/services/AdvanceBroker';
import { FinancialAdvisor } from '../components/services/FinancialAdvisor';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="about/company" element={<Company />} />
        <Route path="about/vision" element={<Vision />} />
        <Route path="services/advance-broker" element={<AdvanceBroker/>} />
        <Route path="services/financial-advisor" element={<FinancialAdvisor/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <hr />
      <Footer />
    </BrowserRouter>
  )
}
