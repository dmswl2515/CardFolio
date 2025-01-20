import React, { useState, useEffect } from "react";
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
        { id: 1, logo: "신한카드", name: "신한카드", img: "https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png"},
        { id: 2, logo: "Samsung Card", name: "삼성카드", img: "https://d1c5n4ri2guedi.cloudfront.net/card/51/card_img/37691/51card.png" },
        { id: 3, logo: "HyundaiCard", name: "현대카드", img: "https://d1c5n4ri2guedi.cloudfront.net/card/2669/card_img/32807/2669card.png" },
        { id: 4, logo: "KB국민카드", name: "KB국민카드", img: "https://d1c5n4ri2guedi.cloudfront.net/card/2553/card_img/36834/2553card.png" },
        { id: 5, logo: "우리카드", name: "우리카드", img: "https://d1c5n4ri2guedi.cloudfront.net/card/2441/card_img/37123/2441card_3.png" },
        { id: 6, logo: "롯데카드", name: "롯데카드", img: "https://d1c5n4ri2guedi.cloudfront.net/card/2261/card_img/21011/2261card.png" },
        { id: 7, logo: "하나카드", name: "하나카드", img: "https://d1c5n4ri2guedi.cloudfront.net/card/2657/card_img/32434/2657card.png" },
        { id: 8, logo: "NH농협카드", name: "NH농협카드", img: "https://d1c5n4ri2guedi.cloudfront.net/card/666/card_img/21431/666card.png" },
        { id: 9, logo: "BC 바로카드", name: "BC 바로카드", img: "https://d1c5n4ri2guedi.cloudfront.net/card/772/card_img/22246/772card.png" },
        { id: 10, logo: "IBK기업은행", name: "IBK기업은행", img: "https://d1c5n4ri2guedi.cloudfront.net/card/2346/card_img/32523/2346card.png" },
        
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
                                <p className="card-logo">{card.logo}</p>
                                <div className="card-content">
                                    <h3 className="card-name">{card.name}</h3>
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
