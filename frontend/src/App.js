import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Component/Layout';
import HomePage from './Pages/HomePage';
import ChartPage from './Pages/ChartPage/ChartPage';
import CardPage from './Pages/CardPage/CardPage';
import CompanyPage from "./Pages/CompanyPage/CompanyPage";
import CashbackPage from "./Pages/CashbackPage/CashbackPage";
import ContentPage from "./Pages/ContentPage/ContentPage";
import PremiumPage from "./Pages/PremiumPage/PremiumPage";
import MileagePage from "./Pages/MileagePage/MileagePage";
import HotalPage from "./Pages/HotalPage/HotalPage";
import CardCoverPage from './Pages/CardCoverPage/CardCoverPage';
import EventPage from "./Pages/EventPage/EventPage";
import Top100Page from "./Pages/ChartPage/TopPage/Top100Page/Top100Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/chart" element={<Layout><ChartPage /></Layout>}/>
      <Route path="/card" element={<Layout><CardPage /></Layout>}/>
      <Route path="/company" element={<Layout><CompanyPage /></Layout>}/>
      <Route path="/cashback" element={<Layout><CashbackPage /></Layout>}/>
      <Route path="/event" element={<Layout><EventPage /></Layout>}/>
      <Route path="/contents" element={<Layout><ContentPage /></Layout>}/>
      <Route path="/premium" element={<Layout><PremiumPage /></Layout>}/>
      <Route path="/mileage" element={<Layout><MileagePage /></Layout>}/>
      <Route path="/hotel" element={<Layout><HotalPage /></Layout>}/>
      <Route path="/cardCover" element={<Layout><CardCoverPage /></Layout>}/>
      <Route path="/top100" element={<Layout><Top100Page /></Layout>}/>
    </Routes>
  );
}

export default App;
