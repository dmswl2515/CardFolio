import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cardImages from "../../Component/CardImage";
import "./ChartPage.css"
import "../../Styles/Style.css";

const ChartPage = () => {
    //current time
    const [currentTime, setCurrentTime ] = useState("");

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);

        return () => clearInterval(interval);
    }, []);

    // card issuer data
    const popularCards = [
        { id: 1, logo: cardImages.신한카드.logo, name: "신한카드", img: cardImages.신한카드.img },
        { id: 2, logo: cardImages.삼성카드.logo, name: "삼성카드", img: cardImages.삼성카드.img },
        { id: 3, logo: cardImages.현대카드.logo, name: "현대카드", img: cardImages.현대카드.img },
        { id: 4, logo: cardImages.KB국민카드.logo, name: "KB국민카드", img: cardImages.KB국민카드.img },
        { id: 5, logo: cardImages.우리카드.logo, name: "우리카드", img: cardImages.우리카드.img },
        { id: 6, logo: cardImages.롯데카드.logo, name: "롯데카드", img: cardImages.롯데카드.img },
        { id: 7, logo: cardImages.하나카드.logo, name: "하나카드", img: cardImages.하나카드.img },
        { id: 8, logo: cardImages.NH농협카드.logo, name: "NH농협카드", img: cardImages.NH농협카드.img },
        { id: 9, logo: cardImages.BC카드.logo, name: "BC카드", img: cardImages.BC카드.img },
        { id: 10, logo: cardImages.IBK기업은행.logo, name: "IBK기업은행", img: cardImages.IBK기업은행.img },
        
    ];

    // card benefit data
    const benefits = [
        { id: 1, name: "통신", img: cardImages.통신.img },
        { id: 2, name: "주유+차량정비", img: cardImages.주유차량정비.img },
        { id: 3, name: "쇼핑", img: cardImages.쇼핑.img },
        { id: 4, name: "항공마일리지", img: cardImages.항공마일리지.img },
        { id: 5, name: "공항라운지", img: cardImages.공항라운지.img },
        { id: 6, name: "무실적+모든가맹점", img: cardImages.무실적모든가맹점.img },
        { id: 7, name: "구독/스트리밍", img: cardImages.구독스트리밍.img },
        { id: 8, name: "해외결제", img: cardImages.해외결제.img },
        { id: 9, name: "배달앱+간편결제", img: cardImages.배달앱간편결제.img },
        { id: 10, name: "병원+약국", img: cardImages.병원약국.img },
        { id: 11, name: "공과금", img: cardImages.공과금.img },
        { id: 12, name: "여행+바우처", img: cardImages.여행바우처.img },
        { id: 13, name: "제휴/PLCC", img: cardImages.제휴PLCC.img },
        { id: 14, name: "증권사CMA", img: cardImages.증권사CMA.img },
    ];

    // card type data 
    const cardTypes = [
        { id: 1, name: "할인형", img: cardImages.할인형.img },
        { id: 2, name: "포인트형", img: cardImages.포인트형.img },
        { id: 3, name: "마일리지형", img: cardImages.마일리지형.img },
        { id: 4, name: "조건없음", img: cardImages.조건없음.img },
        { id: 5, name: "30만원 이하", img: cardImages.삼십만원이하.img },
        { id: 6, name: "30만원 초과", img: cardImages.삼십만원초과.img },
    ];

    return(
        <div className="page-background">
            <div className="common-container">
                {/* CardFolio Section */}
                <section className="cardfolio-chart">
                    <h2>카드폴리오 차트</h2>
                    <div className="cardfolio-chart-container">
                        
                        <NavLink to="./top100" className="chart-items credit-card">
                            <p className="realtime">
                                <i class="fa-regular fa-clock watch-icon"></i> 실시간 &nbsp;&nbsp;&nbsp;{currentTime}
                            </p>
                            <h3>
                                <span class="title-small">신용카드</span> 
                                <span class="title-large">TOP100</span>
                            </h3>
                            <button className="btn credit-btn">보러가기</button>
                        </NavLink>

                        <NavLink to="./release30" className="chart-items new-card">
                            <p className="realtime">
                                <i class="fa-regular fa-clock watch-icon"></i> 실시간
                            </p>
                            <h3>
                                <span class="title-small">신규카드</span> 
                                <span class="title-large">TOP100</span>
                            </h3>
                            <button className="btn new-btn">보러가기</button>
                        </NavLink>

                        <NavLink to="./check100" className="chart-items debit-card">
                            <p className="realtime">
                                <i class="fa-regular fa-clock watch-icon"></i> 실시간
                            </p>
                            <h3>
                                <span class="title-small">체크카드</span> 
                                <span class="title-large">TOP100</span>
                            </h3>
                            <button className="btn debit-btn">보러가기</button>
                        </NavLink>
                    </div>
                </section>

                {/* Card Issuer Ranking Section */}
                <section className="popular-card-chart">
                    <h2>카드사별 인기차트</h2>
                    <div className="popular-card-container">
                        {popularCards.map((card) => (
                            <NavLink 
                                key={card.id} 
                                to={`/chart/${card.name}`}
                                className="card-box"
                            
                            >
                                <img className="card-logo" src={card.logo} alt={card.name}/>
                                <div className="card-content">
                                    <h3>
                                        <span className="card-name">{card.name}</span>
                                        <span>TOP 100</span>
                                    </h3>
                                    <img src={card.img} alt={card.name} className="card-image" />
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </section>

                {/* Card Benefit Section */}
                <section className="benefit-chart">
                    <h2>혜택별 인기차트</h2>
                    <div className="benefit-chart-container">
                        {benefits.map((benefit) => (
                            <div key={benefit.id} className="benefit-box">
                                <img src={benefit.img} alt={benefit.name} className="benefit-image" />
                                <h3 className="benefit-name">
                                    <span>{benefit.name}</span>
                                    <span>Top10</span>
                                </h3>
                            </div>
                        ))}
                    </div>    
                </section>

                <div className="card-type-performance-wrapper">        
                    {/* Card Type Section */}
                    <section className="card-type-chart">
                        <h2>카드타입별 인기차트</h2>
                        <div className="card-type-container">
                            {cardTypes.slice(0, 3).map((type) => (
                                <div key={type.id} className="type-box">
                                    <img src={type.img} alt={type.name} className="type-image" />
                                    <h3 className="type-name">
                                        <span>{type.name}</span>
                                        <span>Top30</span>
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Monthly Performance-Based Card Section */}            
                    <section className="performance-chart">
                        <h2>전월실적별 인기차트</h2>
                        <div className="performance-container">
                            {cardTypes.slice(3).map((type) => (
                                <div key={type.id} className="performance-box">
                                    <img src={type.img} alt={type.name} className="performance-image" />
                                    <h3 className="performance-name">
                                        <span>{type.name}</span>
                                        <span>Top30</span>
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Card Cover Section */}        
                <section className="card-cover">
                    <h2>카드커버 인기차트</h2>
                    <div className="card-cover-container">
                        <img 
                            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/29083/tips_chart_gosty_pc.jpg"
                            alt="Card Covers"
                            className="card-cover-image"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ChartPage;
