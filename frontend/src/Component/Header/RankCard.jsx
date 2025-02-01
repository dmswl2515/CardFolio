import React, { useState } from "react";

function RankCard() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            className={`rank ${isHovered ? "expanded" : ""}`}
            /* 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            */
        >
            <span className="rank-number">1</span>
            <img 
                src="https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAUAARH.png" 
                alt="카드이미지" 
                className="card-image"
            />
            <span className="card-info">신한카드 Mr.Life </span>
            <i className="fas fa-caret-down"></i>
            {isHovered && (
                <div className="rank-details">
                    
                </div>
            )}
        </div>
    );
}

export default RankCard;