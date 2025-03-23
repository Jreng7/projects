import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from "./pages/LoginPage/index.jsx";
import MainPage from "./pages/MainPage/index.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes 