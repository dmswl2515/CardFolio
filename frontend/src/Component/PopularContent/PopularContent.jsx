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
                        <div className="overlay"></div>
                        <img src={content.image} alt={content.title} className="contents-image" />
                        <div className="contents-info">
                        <h3 className="contents-title" dangerouslySetInnerHTML={{ __html: content.title }}></h3>
                            <p className="contents-posts">
                                +{content.posts} <span className="posts-label">Posts</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>    
        </div>
    );
};

export default PopularContent;
