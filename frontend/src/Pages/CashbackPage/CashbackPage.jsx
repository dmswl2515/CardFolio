import React, { useState} from "react";
import CardImage from "../../Component/CardImage";
import CardData from "../../Component/CardData";
import "./CashbackPage.css";


const CashbackPage = () => {
    const [activeCard, setActiveCard] = useState(null);


    const filteredCardDate = CardData.filter(
        (card) => 
            card.event &&
            card.event.trim() != "" &&
            (activeCard === null || card.company === activeCard)
    );
        

    return (
        <div className="page-background">
            <div className="common-container">
                <div className="cashback-event-button-container">
                    <div className="tabs">
                        <button className="tab active">캐시백 이벤트</button>
                        <button className="tab">카드사 이벤트</button>
                    </div>
                    <div className="filter-buttons">
                        <button
                            onClick={() => setActiveCard(null)}
                                style={{
                                    backgroundColor: activeCard === null ? "black" : "#f9f9f9",
                                    color: activeCard === null ? "white" : "#666",
                                }}
                                className="filter-button"
                        >
                            전체 이벤트
                        </button>
                        {Object.keys(CardImage)
                            .filter((key) => CardImage[key].id)
                            .map((key) => (
                            <button 
                                key={CardImage[key].id}
                                onClick={() => setActiveCard(key)}
                                style={{
                                    backgroundColor: activeCard === key ? CardImage[key].color : "#f9f9f9",
                                    color: activeCard === key ? "white" : "#666",
                                }}
                                className="filter-button"
                            >
                                {key}
                        </button>
                        ))}
                        <button className="faq-button">FAQ &gt;</button>
                    </div>
                </div>
                <div className="cashback-event-container">
                    <div className="card-event-list">
                        {filteredCardDate.map((card) => (
                            <div className="card-event-item" key={card.id}>
                                <img src={card.img} alt={`${card.name} 로고`} className="card-event-logo"/>        
                                <span className="card-event-name">{card.name}</span>
                                <button className="event-button">{card.event}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashbackPage;