import React from 'react';
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
import Top100Page from "./Pages/ChartPage/TopPage/Top100Page";
import Release30Page from './Pages/ChartPage/TopPage/Release30Page';
import Check100Page from './Pages/ChartPage/TopPage/Check100';
import CardCompanyChart from './Pages/ChartPage/TopCompanyCardPage/CardCompanyChart';
import BenefitChart from './Pages/ChartPage/BenefitPage/BenefitChart';
import BenefitTypeChart from './Pages/ChartPage/BenefitTypePage/BenefitTypeChart';
import PerformanceChart from './Pages/ChartPage/PerformancePage/PerformanceChart';
import CardDetail from './Pages/CardDetail/CardDetailPage';
import CompanyDetailPage from './Pages/CompanyDetailPage/CompanyDetailPage';
import CompanyBenefitPage from './Pages/CompanyBenefitPage/CompanyBenefitPage';
import AlgorithmTest from './Component/AlgorithmTest/AlgorithmTest';

// TanStack Query 클라이언트 생성
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
      <Route path="/chart/top100" element={<Layout><Top100Page /></Layout>}/>
      <Route path="/chart/release30" element={<Layout><Release30Page /></Layout>}/>
      <Route path="/chart/check100" element={<Layout><Check100Page /></Layout>}/>
      <Route path="/chart/:cardCompany" element={<Layout><CardCompanyChart /></Layout>}/>
      <Route path="/chart/benefit/:benefitCategory" element={<Layout><BenefitChart /></Layout>}/>
      <Route path="/CardFolio/benefit-type/:benefitType" element={<Layout><BenefitTypeChart /></Layout>}/>
      <Route path="/CardFolio/performance/:performanceAmount" element={<Layout><PerformanceChart /></Layout>}/>
      <Route path="/card/:cardId" element={<Layout><CardDetail /></Layout>}/>
      <Route path="/company/:companyName" element={<Layout><CompanyDetailPage /></Layout>}/>
      <Route path="/company/:companyName/benefit" element={<Layout><CompanyBenefitPage /></Layout>}/>
      <Route path="/algorithm-test" element={<Layout><AlgorithmTest /></Layout>}/>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
