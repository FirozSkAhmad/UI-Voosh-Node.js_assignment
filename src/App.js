import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./style.css";
import Home from './Components/Home'
import NavBar from './Components/Navbar'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import OrderDetails from './Components/Table';
import Protected from "./Components/Protected";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/login" element={< Login />} />
        <Route path="/signup" element={< SignUp />} />
        <Route path="/orderDetails" element={< OrderDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
