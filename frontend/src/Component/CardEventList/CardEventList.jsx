import React from "react";
import "./CardEventList.css";

const CardEventList = ({ 
  cards, 
  onCardClick, 
  eventButtonColor = "#ff6000",
  eventButtonBackground = "#ffefe5"
}) => {
  return (
    <div className="card-event-container">
      <div className="card-event-list">
        {cards.map((card) => (
          <div 
            className="card-event-item" 
            key={card.id}
            onClick={() => onCardClick && onCardClick(card)}
          >
            <div className="card-img-wrapper">
              <img 
                src={card.img} 
                alt={`${card.name} 로고`} 
                className="card-event-logo"
              />        
              <div className="circle-background"></div>
            </div>
            <span className="card-event-name">{card.name}</span>
            <button 
              className="event-button"
              style={{
                color: eventButtonColor,
                backgroundColor: eventButtonBackground
              }}
            >
              {card.event}
            </button>
            {/* <i className="fa-solid fa-angle-right angle-icon"></i> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardEventList;