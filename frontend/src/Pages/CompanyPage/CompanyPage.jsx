import React from "react";
import { useNavigate } from "react-router-dom";
import CardImages from "@components/CardImage";
import CardIntroduction from "@components/CardIntroduction/CardIntroduction";
import CompanyNavigation from "@components/CompanyNavigation/CompanyNavigation";
import "@styles/Style.css";
import "./CompanyPage.css";

const CompanyPage = () => {
    const navigate = useNavigate();

    const handleCompanyClick = (companyName) => {
        navigate(`/company/${companyName}`);
    };

    return (
        <div className="page-background">
            <div className="common-container">
                {/* Card Company List */}
                <CompanyNavigation />

                <section className="card-ranking-section">
                    <div className="card-company-ranking-title">
                        <h2>카드사 인기순위</h2>
                        <p className="ranking-date">2024년 4분기 기준</p>
                    </div>
                    <div className="ranking-card-companys">
                        <div className="ranking-card-company">
                            <p className="rank-number">1</p>
                            <img src="https://api.card-gorilla.com:8080/storage/corp/3/tips/32229/tips_sh.jpg" alt="신한카드" />
                            <button onClick={() => handleCompanyClick("신한카드")}><span className="button-card-name">신한카드</span> 바로가기</button>
                        </div>
                    
                        <div className="ranking-card-company">
                            <p className="rank-number">2</p>
                            <img src="https://api.card-gorilla.com:8080/storage/corp/3/tips/31939/tips_samsung.jpg" alt="삼성카드" />
                            <button onClick={() => handleCompanyClick("삼성카드")}><span className="button-card-name">삼성카드</span> 바로가기</button>
                        </div>
                        <div className="ranking-card-company">
                            <p className="rank-number">3</p>
                            <img src="https://d1c5n4ri2guedi.cloudfront.net/corp/2/tips/37119/tips_hd2.jpg" alt="삼성카드" />
                            <button onClick={() => handleCompanyClick("현대카드")}><span className="button-card-name">현대카드</span> 바로가기</button>
                        </div>
                    </div>
                </section>

                <section className="card-button-section">
                    {Object.keys(CardImages).map((key) => {
                        const card = CardImages[key];
                        
                        if (!card.id || !card.logo || card.id < 4) {
                            return null;
                        }
                        return (
                            <div className="card-button-item-container">  
                                <div
                                    key={card.id}
                                    className="card-button-item"
                                    style={{ backgroundColor: card.color || "#fff" }}
                                >
                                
                                    <img 
                                        src={card.logo2} 
                                        alt={`${key} 로고`} 
                                        className="card-button-logo" 
                                        style={
                                            key == "롯데카드"
                                            ? { width: "120px", height: "60px", margin: "28px 0px"}
                                            : {}
                                        }
                                    />
                                
                                    <button className="go-to-company-button" onClick={() => handleCompanyClick(key)}>바로가기</button>
                                </div>
                            </div>
                        );
                    })}
                </section>

            </div>
                <section>
                    {/* CardIntroduction Component(2) */}
                    <CardIntroduction 
                        backgroundColor="#fff"
                        circleColorClass="gray-background"
                        sectionTitle1="카드사별 베스트셀러"
                    />
                </section>

                <section>
                    {/* CardIntroduction Component */}
                    <CardIntroduction
                        circleColorClass="white-background"
                        buttonColor="white"
                        sectionTitle1="카드사별 신규 카드"
                    />
                </section>
        </div>
    );
};


export default CompanyPage;