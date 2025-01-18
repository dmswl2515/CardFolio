import React from "react";
import './PopularContent.css';

const PopularContent = ({ contents }) => {
    return (
        <div className="popular-content">
            <div className="section-header">
                <h2>인기 콘텐츠</h2>
                <button className="view-all-button">전체보기</button>
            </div>
            <div className="popular-content-container">
                {contents.map((content, index) =>  (
                    <div key={index} className="popular-card">
                        <img src={content.image} alt={content.title} className="contents-image" />
                        <div className="contents-info">
                            <h3 className="contents-title">{content.title}</h3>
                            <p className="contents-posts">{content.posts}</p>
                        </div>
                    </div>
                ))}
            </div>    
        </div>
    );
};

export default PopularContent;
