import React, { useState} from "react";
import CardData from "../../Component/CardData";
import FilterButtons from "../../Component/FilterButtons/FilterButtons";
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
                <FilterButtons 
                    activeCard={activeCard} 
                    setActiveCard={setActiveCard} 
                    showFaq={true} 
                />

                <div className="cashback-event-container">
                    <div className="card-event-list">
                        {filteredCardDate.map((card) => (
                            <div className="card-event-item" key={card.id}>
                                <div className="card-img-wrapper">
                                    <img src={card.img} alt={`${card.name} 로고`} className="card-event-logo"/>        
                                    <div className="circle-background"></div>
                                </div>
                                <span className="card-event-name">{card.name}</span>
                                <button className="event-button">{card.event}</button>
                                <i class="fa-solid fa-angle-right angle-icon"></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashbackPage;