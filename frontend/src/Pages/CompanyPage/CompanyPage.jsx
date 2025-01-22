import React from "react";
import CardData from "../../Component/CardData";
import "../../Styles/Style.css";
import "./CompanyPage.css";

const CompanyPage = () => {
    return (
        <div className="page-background">
            <div className="common-container">
                {/* Card Company List */}
                <section className="card-company-list">
                    <div className="card-company-all">전체 카드사</div>
                    <div className="card-company-item">신한카드</div>
                    <div className="card-company-item">삼성카드</div>
                    <div className="card-company-item">현대카드</div>
                    <div className="card-company-item">KB국민카드</div>
                    <div className="card-company-item">우리카드</div>
                    <div className="card-company-item">롯데카드</div>
                    <div className="card-company-item">하나카드</div>
                    <div className="card-company-item">NH농협카드</div>
                    <div className="card-company-item">BC카드</div>
                    <div className="card-company-item">IBK기업은행</div>
                </section>

                <section className="card-ranking-section">
                    <div className="card-company-ranking-title">
                        <h2>카드사 인기순위</h2>
                        <p className="ranking-date">2024년 4분기 기준</p>
                    </div>
                    <div className="ranking-card-companys">
                        <div className="ranking-card-company">
                            <p className="rank-number">1</p>
                            <img src="https://api.card-gorilla.com:8080/storage/corp/3/tips/32229/tips_sh.jpg" alt="신한카드" />
                            <button><span className="button-card-name">신한카드</span> 바로가기</button>
                        </div>
                    
                        <div className="ranking-card-company">
                            <p className="rank-number">2</p>
                            <img src="https://api.card-gorilla.com:8080/storage/corp/3/tips/31939/tips_samsung.jpg" alt="삼성카드" />
                            <button><span className="button-card-name">삼성카드</span> 바로가기</button>
                        </div>
                        <div className="ranking-card-company">
                            <p className="rank-number">3</p>
                            <img src="https://d1c5n4ri2guedi.cloudfront.net/corp/2/tips/37119/tips_hd2.jpg" alt="삼성카드" />
                            <button><span className="button-card-name">현대카드</span> 바로가기</button>
                        </div>
                    </div>
                </section>

                <section>

                </section>
            </div>
        </div>
    );
};


export default CompanyPage;