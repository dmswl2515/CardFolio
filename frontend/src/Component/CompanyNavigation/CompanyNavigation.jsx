import React from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyNavigation.css";

const CompanyNavigation = ({ selectedCompany = "전체", backgroundColor }) => {
    const navigate = useNavigate();

    // 카드사별 브랜드 컬러
    const companyColors = {
        "신한카드": "#4666C1",
        "삼성카드": "#006BD1", 
        "현대카드": "#444444",
        "롯데카드": "#6B4AAF",
        "KB국민카드": "#79684F",
        "우리카드": "#016795",
        "하나카드": "#007C72",
        "NH농협카드": "#1961A1",
        "IBK기업은행": "#2C70B9",
        "BC바로카드": "#BB464B",
        "전체": "#222"
    };

    const handleCompanyClick = (companyName) => {
        navigate(`/company/${companyName}`);
    };

    // backgroundColor prop이 있으면 사용, 없으면 selectedCompany에 따라 결정
    const finalBackgroundColor = backgroundColor || companyColors[selectedCompany] || companyColors["전체"];

    // 긴 이름의 회사들은 작은 폰트 사용
    const longNameCompanies = ["KB국민카드", "NH농협카드", "IBK기업은행", "BC바로카드"];
    const isLongName = longNameCompanies.includes(selectedCompany);

    const handleCompanyHomeClick = () => {
        navigate('/company');
    };

    return (
        <section className="card-company-list" style={{ backgroundColor: finalBackgroundColor }}>
            <div className={`card-company-all ${isLongName ? 'small-font' : ''}`}>
                {selectedCompany === "전체" ? "전체 카드사" : (
                    <>
                        <div className="companyHome-icon-wrapper" onClick={handleCompanyHomeClick}>
                            <img 
                                src="https://api.card-gorilla.com:8080/storage/corp/3/tips/32260/tips_icon_home.png" 
                                alt="카드사 홈"
                                className="companyHome-icon"
                            />
                        </div>
                        {selectedCompany}
                    </>
                )}
            </div>
            <div className="card-company-item" onClick={() => handleCompanyClick("신한카드")}>신한카드</div>
            <div className="card-company-item" onClick={() => handleCompanyClick("삼성카드")}>삼성카드</div>
            <div className="card-company-item" onClick={() => handleCompanyClick("현대카드")}>현대카드</div>
            <div className="card-company-item" onClick={() => handleCompanyClick("KB국민카드")}>KB국민카드</div>
            <div className="card-company-item" onClick={() => handleCompanyClick("우리카드")}>우리카드</div>
            <div className="card-company-item" onClick={() => handleCompanyClick("롯데카드")}>롯데카드</div>
            <div className="card-company-item" onClick={() => handleCompanyClick("하나카드")}>하나카드</div>
            <div className="card-company-item" onClick={() => handleCompanyClick("NH농협카드")}>NH농협카드</div>
            <div className="card-company-item" onClick={() => handleCompanyClick("IBK기업은행")}>IBK기업은행</div>
            <div className="card-company-item" onClick={() => handleCompanyClick("BC바로카드")}>BC바로카드</div>
        </section>
    );
};

export default CompanyNavigation;