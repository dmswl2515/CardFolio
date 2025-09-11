import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardInformation.css";

const CardInformation = ({ card }) => {
    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/card/${card.cardId}`);
    };

    return (

            <div className="card-container">
                <div className="card-image-wrapper">
                    <img src={card.img} alt={card.name} className="card-image-main card-image-cardinfo"/>
                </div>
                <div className="card-details">
                    <div className="card-details-section1">
                        <h3 className="card-name">{card.name}</h3>
                        <p className="card-company">{card.company}</p>
                        <button className="details-button" onClick={handleDetailsClick}>자세히 보기</button>
                    </div>
                    <p className={`card-event ${card.event ? 'has-content' : ''}`}>{card.event}</p>
                    <div className="card-benefits">
                        <p>
                            {card.benefit1} <span className="card-benefit-content">{card.benefitcontent1}</span>
                        </p>
                        <p>
                            {card.benefit2} <span className="card-benefit-content">{card.benefitcontent2}</span>
                        </p>
                        <p>
                            {card.benefit3} <span className="card-benefit-content">{card.benefitcontent3}</span>
                        </p>
                    </div>
                    <div className="card-details-section2">
                        <p className="card-fee">{card.fee}</p>
                        <p className="card-condition">{card.condition}</p>
                        <p className="card-issue">{card.issueType}</p>
                    </div>
                </div>
            </div>
     
    );
};

export default CardInformation;