import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Component/Layout';
import HomePage from './Pages/HomePage';
import ChartPage from './Pages/ChartPage/ChartPage';
import CardPage from './Pages/CardPage/CardPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/chart" element={<Layout><ChartPage /></Layout>}/>
      <Route path="/card" element={<Layout><CardPage /></Layout>}/>
    </Routes>
  );
}

export default App;
