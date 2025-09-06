import React from "react";
import "./CardIntroduction.css";
import "../../Styles/Style.css";

{/* individual card component */}
const Card = ({ title, imageUrl, subtitle, circleColorClass }) => {
    return (
        <div className={`card ${circleColorClass}`}>
            <img src={imageUrl} alt={title} className="card-image-main" />
            <h3 className="card-title">{title}</h3>
            <p className="card-subtitle">{subtitle}</p>
        </div>
    );
};

{/* cardlist component */}
const CardList = ({ cards, backgroundColor, circleColorClass }) => {
    return (
        <div className="card-list" style={{ backgroundColor: backgroundColor }}>
            <div className="cards">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        subtitle={card.subtitle}
                        circleColorClass={circleColorClass}
                    />
                ))}
            </div>
        </div>
    );
};

const CardIntroduction = ({ backgroundColor, buttonColor, circleColorClass, sectionTitle1, sectionTitle2 }) => {
    const eventCards = [
        {
            title: "삼성카드 taptap O",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/51/card_img/37691/51card.png",
            subtitle: "삼성카드",
        },
        {
            title: "디지로카 London",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/2632/card_img/31797/2362card.png",
            subtitle: "롯데카드",
        },
        {
            title: "현대카드 M",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/2669/card_img/32807/2669card.png",
            subtitle: "현대카드",
        },
        {
            title: "IBK포인트(신용)",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/2779/card_img/38233/2778card.png",
            subtitle: "삼성카드",
        },
        {
            title: "BC 바로 On&Off 카드",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/2591/card_img/30912/2591card.png",
            subtitle: "BC 바로카드",
        },
        {
            title: "신한카드 Deep Oil",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/39/card_img/31864/39card.png",
            subtitle: "신한카드",
        },
    ];

    const discountCards = [
        {
            title: "LOCA 365 카드",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/2330/card_img/24131/2330card.png",
            subtitle: "롯데카드",
        },
        {
            title: "신한카드 Mr.Life",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png",
            subtitle: "신한카드",
        },
        {
            title: "원더카드 (원더 Life)",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/2654/card_img/32266/2654card.png",
            subtitle: "하나카드",
        },
        {
            title: "현대카드 Summit",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/2692/card_img/33549/2692card.png",
            subtitle: "현대카드",
        },
        {
            title: "BC 바로 MACAO 카드",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/2728/card_img/36134/2728card.png",
            subtitle: "BC 바로카드",
        },
        {
            title: "현대카드Z family Edition2",
            imageUrl: "https://d1c5n4ri2guedi.cloudfront.net/card/2683/card_img/32811/2683card.png",
            subtitle: "현대카드",
        },
    ];

    return (
        <div className="card-intro-container" style={{ backgroundColor }} >
            <div className="card-introduction">
                <div className="section-header">
                    <hr2>{sectionTitle1}</hr2>
                    <button className="view-all-button" style={{ backgroundColor: buttonColor }}>전체보기</button>
                </div>
                <CardList 
                    cards={eventCards} 
                    backgroundColor={backgroundColor}
                    circleColorClass={circleColorClass} 
                />
                
                <div className="section-header">
                    <hr2>{sectionTitle2}</hr2>
                </div>
                <CardList 
                    cards={discountCards} 
                    backgroundColor={backgroundColor} 
                    circleColorClass={circleColorClass} 
                />
            </div>
        </div>
    );
};

export default CardIntroduction;
export { Card };