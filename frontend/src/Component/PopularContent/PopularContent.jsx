import React, { useState } from "react";
import ServicePrepModal from '../ServicePrepModal/ServicePrepModal';
import './PopularContent.css';

const PopularContent = ({ contents }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleContentClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="popular-content">
            <div className="section-header">
                <h2>인기 콘텐츠</h2>
                <button className="view-all-button" onClick={handleContentClick}>전체보기</button>
            </div>
            <div className="popular-content-container">
                {contents.map((content, index) =>  (
                    <div key={index} className="popular-card" onClick={handleContentClick} style={{ cursor: 'pointer' }}>
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
            
            <ServicePrepModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default PopularContent;
