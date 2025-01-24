import React from "react";
import { NavLink } from "react-router-dom";
import CardImage from "../../Component/CardImage";
import "./FilterButtons.css";

const FilterButtons = ({ activeCard, setActiveCard, showFaq }) => {
    
    return (
        <div className="cashback-event-button-container">
            <div className="tabs">
                <NavLink
                    to="/cashback"
                    className={({ isActive }) => (isActive ? "tab active" : "tab")}
                >
                    캐시백 이벤트
                </NavLink>
                <NavLink
                    to="/event"
                    className={({ isActive }) => (isActive ? "tab active" : "tab")}
                >
                    카드사 이벤트
                </NavLink>
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
                                backgroundColor: activeCard === key
                                    ? CardImage[key].color
                                    : "#f9f9f9",
                                color: activeCard === key ? "white" : "#666",
                            }}
                            className="filter-button"
                        >
                            {key}
                        </button>
                    ))}
                {showFaq && (
                    <button className="faq-button">FAQ &gt;</button>
                )}
            </div>
        </div>
    );
};

export default FilterButtons;