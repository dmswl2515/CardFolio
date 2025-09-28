import React, { useState} from "react";
import FilterButtons from "../../Component/FilterButtons/FilterButtons";
import EventList from "@components/EventList/EventList";
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

                <EventList events={filteredCardData} />
            </div>
        </div>
    );
};

export default EventPage;