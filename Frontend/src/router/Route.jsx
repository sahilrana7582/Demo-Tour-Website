import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Home1 from '../myComponents/Home1';
import Login from '../pages/Login';
import Tours from '../pages/Tours';
import Register from '../pages/Register';
import TourDetails from '../pages/TourDetails';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
    </Routes>
  );
};

export default Router;
