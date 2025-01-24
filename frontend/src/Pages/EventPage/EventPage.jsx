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
                        <div key={event.id} className="event-companys">
                            <img src={event.img} alt={`${event.provider} 로고`} className="event-content-img"/>
                            <div className="event-content-info">
                                <h3>{event.provider}</h3>
                                <p>{event.benefit}</p>
                                <p>{event.period}</p>
                                <a href={event.url} target="-blank" rel="noopener noreferrer">
                                    자세히 보기
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventPage;