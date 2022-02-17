import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Contact } from '../components/Contact';
import { Home } from '../components/Home';
import { Navbar } from '../ui/Navbar';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <br/>
             
        <Routes>
            <Route path="about" element={ <h1>About Page</h1> } />
            <Route path="services" element={<h1>Users Page</h1> } />
            <Route path="home" element={<h1>Home Page</h1> } />
            <Route path="contact" element={<Contact/> } />
            <Route path="/*" element={<Home/> } />
        </Routes>
</BrowserRouter>
  )
}
