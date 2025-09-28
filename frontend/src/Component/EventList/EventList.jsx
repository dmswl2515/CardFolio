import React, { useState } from "react";
import EventData from "../EventData";
import MoreButton from '../MoreButton/MoreButton';
import "./EventList.css";

const EventList = ({ 
  events, 
  companyName,
  onEventClick,
  initialLimit = 2
}) => {
  const [showAll, setShowAll] = useState(false);
  
  // companyName이 전달되면 EventData에서 필터링, 아니면 전달받은 events 사용
  const filteredEvents = companyName 
    ? EventData.filter(event => event.company === companyName)
    : events;
    
  // 데이터가 없으면 null 반환 (컴포넌트 숨김)
  if (!filteredEvents || filteredEvents.length === 0) {
    return null;
  }
  
  // 표시할 이벤트 결정 (showAll이 true면 전체, 아니면 initialLimit만)
  const displayEvents = showAll ? filteredEvents : filteredEvents.slice(0, initialLimit);
  
  const handleEventClick = (event) => {
    if (onEventClick) {
      onEventClick(event);
    } else {
      window.open(event.url, "_blank");
    }
  };

  const handleMoreClick = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="cardcompany-event-container">
        {displayEvents.map((event) => (
          <div 
            key={event.id} 
            className="event-companys"  
            onClick={() => handleEventClick(event)}
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
      
      {/* 더보기 버튼 - 데이터가 initialLimit보다 많고 아직 전체를 보여주지 않았을 때만 표시 */}
      {!showAll && filteredEvents.length > initialLimit && (
        <MoreButton text="이벤트 더보기" onClick={handleMoreClick} />
      )}
    </>
  );
};

export default EventList;