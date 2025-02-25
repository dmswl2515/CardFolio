import React, { useState, useEffect } from "react";
import CardInformation from "../../Component/CardInformation/CardInformation";
import CardData from "../../Component/CardData";
import "../../Styles/Style.css";
import "./CardPage.css";

const CardPage = () => {
    const [activeTab, setActiveTab] = useState("credit"); //basic card type
    const [cards, setCards] = useState([]); //save card data
    const [loading, setLoading] = useState(false); 

    //get data from back-end
    const fetchCards = async (type) => {
        setLoading(true);
        try {
            const response = await fetch(`http://13.210.30.163:8081/api/cards/type/${type}`);
            const data = await response.json();
            setCards(data);
        } catch (error) {
            console.error("데이터 불러오기 실패:" , error);
        }
        setLoading(false);
    };

    //when active, call API
    useEffect(() => {
        fetchCards(activeTab);
    }, [activeTab]);

    return (
        <div className="page-background">
            <div className="common-container">
                {/* Card Search Section */}
                <section className="card-search-section">
                    <h2 className="card-search-title">
                        국내최대규모! 총 <span className="highlight">1425</span>개 중
                        <br />
                        내게 꼭 맞는 카드만 찾아보세요!
                    </h2>
                    <div className="card-search-options">
                        <div className="search-option-box">
                            <p className="option-description1">맞춤 혜택으로 직접 찾기</p>
                            <img 
                                src="https://api.card-gorilla.com:8080/storage/corp/2/tips/34146/tips_card_img_01.png"
                                alt="카드 검색"
                                className="search-option-icon"
                            />
                            <p className="option-description2">100가지 상세혜택으로</p>
                            <button className="option-button">맞춤 카드 검색</button>
                        </div>
                        <div className="search-option-box">
                            <p className="option-description1">1분 테스트로 추천 받기</p>
                            <img 
                                src="https://api.card-gorilla.com:8080/storage/corp/2/tips/34147/tips_card_img_02.png"
                                alt="카드 추천 테스트"
                                className="search-option-icon"
                            />
                            <p className="option-description2">소비성향으로 알아보는</p>
                            <button className="option-button">카드추천 테스트</button>
                        </div>
                    </div>
                </section>

                {/* Card List Section */}
                <section className="card-list-section">
                    <div className="tab-container">
                        <button
                            className={activeTab === "credit" ? "active-tab" : ""}
                            onClick={() => setActiveTab("credit")}
                        >
                            신용카드
                        </button>
                        <button
                            className={activeTab === "debit" ? "active-tab" : ""}
                            onClick={() => setActiveTab("debit")}
                        >
                            체크카드
                        </button>
                    </div>

                    {/* show loading state */}
                    {loading ? (
                        <p>카드를 불러오는 중입니다.</p>
                    ) : (
                        cards.map((card, index) => <CardInformation key={index} card={card} />)
                    )}
                    
                    <div className="button-container">
                        <button className="more-cards-btn">
                            카드 더보기 <i class="fa-solid fa-angle-down"></i>
                        </button>
                        <button className="search-benefits-btn">
                            <i class="fa-solid fa-magnifying-glass benefits-search-icon"> 원하는 혜택만 검색</i>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CardPage;