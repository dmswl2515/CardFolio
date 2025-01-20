import React, { useState, useEffect } from "react";
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

    // card issuer date
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

    return(
        <div className="chart-page">
            <div className="common-container">
                {/* CardFolio Section */}
                <section className="cardfolio-chart">
                    <h2>카드폴리오 차트</h2>
                    <div className="cardfolio-chart-container">
                        <div className="chart-items credit-card">
                            <p className="realtime">
                                <i class="fa-regular fa-clock watch-icon"></i> 실시간 &nbsp;&nbsp;&nbsp;{currentTime}
                            </p>
                            <h3>
                                <span class="title-small">신용카드</span> 
                                <span class="title-large">TOP100</span>
                            </h3>
                            <button className="btn credit-btn">보러가기</button>
                        </div>
                    
                        <div className="chart-items new-card">
                            <p className="realtime">
                                <i class="fa-regular fa-clock watch-icon"></i> 실시간
                            </p>
                            <h3>
                                <span class="title-small">신규카드</span> 
                                <span class="title-large">TOP100</span>
                            </h3>
                            <button className="btn new-btn">보러가기</button>
                        </div>

                        <div className="chart-items debit-card">
                            <p className="realtime">
                                <i class="fa-regular fa-clock watch-icon"></i> 실시간
                            </p>
                            <h3>
                                <span class="title-small">체크카드</span> 
                                <span class="title-large">TOP100</span>
                            </h3>
                            <button className="btn debit-btn">보러가기</button>
                        </div>
                    </div>
                </section>

                {/* Card Issuer Ranking Section */}
                <section className="popular-card-chart">
                    <h2>카드사별 인기차트</h2>
                    <div className="popular-card-container">
                        {popularCards.map((card) => (
                            <div key={card.id} className="card-box">
                                <img className="card-logo" src={card.logo} alt={card.name}/>
                                <div className="card-content">
                                    <h3>
                                        <span className="card-name">{card.name}</span>
                                        <span>TOP 100</span>
                                    </h3>
                                    <img src={card.img} alt={card.name} className="card-image" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ChartPage;
