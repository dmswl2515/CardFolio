import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Component/Layout';
import HomePage from './Pages/HomePage';
import ChartPage from './Pages/ChartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/chart" element={<Layout><ChartPage /></Layout>}/>
    </Routes>
  );
}

export default App;
