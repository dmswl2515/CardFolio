import React, { useState} from "react";
import FilterButtons from "../../Component/FilterButtons/FilterButtons";
import EventData from "../../Component/EventData"
import "./EventPage.css";


const EventPage = () => {
    const [activeCard, setActiveCard] = useState(null);


    const filteredCardData = EventData.filter(
        (card) => activeCard === null || card.company === activeCard
    ).sort((a, b) => new Date(a.period.split(" ~ ")[0]) - new Date(b.period.split(" ~ ")[0]));

    return (
        <div className="page-background">
            <div className="common-container">
            <FilterButtons 
                activeCard={activeCard} 
                setActiveCard={setActiveCard} 
                showFaq={false} 
            />

                <div className="cardcompany-event-container">
                    {filteredCardData.map((event) => (
                        <div 
                            key={event.id} 
                            className="event-companys"  
                            onClick={() => window.open(event.url, "_blank")}
                        >
                            <p className="company-name">{event.company}</p>
                            <img src={event.img} alt={`${event.provider} 로고`} className="event-content-img"/>
                            <div className="event-content-info">
                                <p className="bnf">{event.benefit}</p>
                                <h3 className="pvd">{event.provider}</h3>
                            </div>
                            <p className="term">{event.period}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventPage;