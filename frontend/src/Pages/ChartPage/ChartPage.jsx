import React, { useState, useEffect } from "react";
import "./ChartPage.css"
import "../../Styles/Style.css";

const ChartPage = () => {
    const [currentTime, setCurrentTime ] = useState("");

    useEffect(() => {
        //current time
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
            </div>
        </div>
    );
};

export default ChartPage;
