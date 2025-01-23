import React from "react";
import CardImage from "../../Component/CardImage";
import CardData from "../../Component/CardData";
import "./CashbackPage.css";


const CashbackPage = () => {
    return (
        <div className="page-background">
            <div className="common-container">
                <div className="cashback-event-container">
                    <div className="tabs">
                        <button className="tab active">캐시백 이벤트</button>
                        <button className="tab">카드사 이벤트</button>
                    </div>
                    <div className="filter-buttons">
                        <button>전체 이벤트</button>
                        {Object.keys(CardImage).map((key) => (
                            <button key={CardImage[key].id}>{key}</button>
                        ))}
                        <button>FAQ &gt;</button>
                    </div>
                    <div className="card-event-list">
                        {CardData.map((card) => (
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