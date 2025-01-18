import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Component/Layout';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
    </Routes>
  );
}

export default App;
