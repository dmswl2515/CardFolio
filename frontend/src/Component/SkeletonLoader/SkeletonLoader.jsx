import React from 'react';
import './SkeletonLoader.css';

const SkeletonCard = ({ backgroundClass = '' }) => (
    <div className={`skeleton-card ${backgroundClass}`}>
        <div className="skeleton-image"></div>
        <div className="skeleton-title"></div>
        <div className="skeleton-subtitle"></div>
    </div>
);

const SkeletonCardList = ({ count = 6, backgroundClass = '' }) => (
    <div className="skeleton-card-list">
        <div className="skeleton-cards">
            {Array(count).fill(0).map((_, index) => (
                <SkeletonCard key={index} backgroundClass={backgroundClass} />
            ))}
        </div>
    </div>
);

const SkeletonSection = ({ title, cardCount = 6, backgroundClass = '' }) => (
    <div className="skeleton-section">
        <div className="skeleton-section-header">
            <div className="skeleton-section-title"></div>
        </div>
        <SkeletonCardList count={cardCount} backgroundClass={backgroundClass} />
    </div>
);

const SkeletonChart = () => (
    <div className="skeleton-chart">
        <div className="skeleton-chart-container">
            <div className="skeleton-chart-header">
                <div className="skeleton-chart-title"></div>
                <div>
                    <div className="skeleton-chart-tabs">
                        <div className="skeleton-chart-tab"></div>
                        <div className="skeleton-chart-tab"></div>
                        <div className="skeleton-chart-tab"></div>
                        <div className="skeleton-chart-tab"></div>
                    </div>
                </div>
            </div>
            <div className="skeleton-chart-list">
                {Array(4).fill(0).map((_, index) => (
                    <div key={index} className="skeleton-chart-item">
                        <div className="skeleton-chart-item-title"></div>
                        <div className="skeleton-chart-entries">
                            {Array(4).fill(0).map((_, entryIndex) => (
                                <div key={entryIndex} className="skeleton-chart-entry">
                                    <div className="skeleton-chart-entry-image"></div>
                                    <div className="skeleton-chart-entry-text"></div>
                                </div>
                            ))}
                        </div>
                        <div className="skeleton-chart-button"></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const SkeletonLoader = ({ 
    type = 'cards', // 'cards', 'section', 'chart'
    count = 6,
    title,
    backgroundClass = ''
}) => {
    if (type === 'section') {
        return <SkeletonSection title={title} cardCount={count} backgroundClass={backgroundClass} />;
    }
    
    if (type === 'chart') {
        return <SkeletonChart />;
    }
    
    if (type === 'cards') {
        return <SkeletonCardList count={count} backgroundClass={backgroundClass} />;
    }

    return <SkeletonCardList count={count} backgroundClass={backgroundClass} />;
};

export default SkeletonLoader;
export { SkeletonCard, SkeletonCardList, SkeletonSection, SkeletonChart };