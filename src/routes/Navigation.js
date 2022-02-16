import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Welcome } from '../components/Welcome';
import { Navbar } from '../ui/Navbar';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="about" element={ <h1>About Page</h1> } />
            <Route path="services" element={<h1>Users Page</h1> } />
            <Route path="home" element={<h1>Home Page</h1> } />
            <Route path="contact" element={<h1>Contact</h1> } />
            <Route path="/*" element={<Welcome/> } />
        </Routes>
</BrowserRouter>
  )
}
