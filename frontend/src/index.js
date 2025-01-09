import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import Carousel from './Component/Swiper/Carousel';
import CardIntroduction from './Component/CardIntroduction/CardIntroduction';
import Chart from './Component/Chart/Chart';
import Footer from './Footer/Footer';
import YouTube from './Component/YouTube/YouTube';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Carousel />
    <CardIntroduction />
    <Chart />
    <YouTube />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
