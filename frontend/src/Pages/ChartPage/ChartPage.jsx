import React from "react";
import "./ChartPage.css"
import "../../Styles/Style.css";

const ChartPage = () => {
    return(
        <div className="chart-page">
            <div className="common-container">
                {/* CardFolio Section */}
                <section className="cardfolio-chart">
                    <h2>카드폴리오 차트</h2>
                    <div className="cardfolio-chart-container">
                        <div className="chart-items credit-card">
                            <p className="realtime">실시간</p>
                            <h3>신용카드 TOP100</h3>
                            <button className="btn credit-btn">보러가기</button>
                        </div>
                    
                        <div className="chart-items new-card">
                            <p className="realtime">실시간</p>
                            <h3>신용카드 TOP100</h3>
                            <button className="btn new-btn">보러가기</button>
                        </div>

                        <div className="chart-items debit-card">
                            <p className="realtime">실시간</p>
                            <h3>체크카드 TOP100</h3>
                            <button className="btn debit-btn">보러가기</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ChartPage;
