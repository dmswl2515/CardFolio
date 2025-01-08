import React from "react";
import "./Chart.css";

const Chart = () => {
    const chartData = [
        {
            title: "신용카드 TOP100",
            items: [
                {rank: 1, name: "삼성카드 taptap 0", image: "https://d1c5n4ri2guedi.cloudfront.net/card/51/card_img/37691/51card.png"},
                {rank: 2, name: "신한카드 Mr.Life", image: "https://d1c5n4ri2guedi.cloudfront.net/card/13/card_img/28201/13card.png"},
                {rank: 3, name: "현대카드 M", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2669/card_img/32807/2669card.png"},
                {rank: 4, name: "삼성카드 & MILEAGE PLATINUM (스카이패스)", image: "https://d1c5n4ri2guedi.cloudfront.net/card/49/card_img/27705/49card.png"},
            ],
        },
        {
            title: "마일리지형 TOP30",
            items: [
                {rank: 1, name: "삼성카드 & MILEAGE PLATINUM (스카이패스)", image: "https://d1c5n4ri2guedi.cloudfront.net/card/49/card_img/27705/49card.png"},
                {rank: 2, name: "카드의정석 EVERY MILE SKYPASS", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2553/card_img/36834/2553card.png"},
                {rank: 3, name: "하나 스카이패스 아멕스 플래티늄 카드", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2237/card_img/20939/2237card.png"},
                {rank: 4, name: "BLISS.5 카드(마일리지)", image: "https://d1c5n4ri2guedi.cloudfront.net/card/772/card_img/22246/772card.png"},
            ],
        },
        {
            title: "포인트형 TOP30",
            items: [
                {rank: 1, name: "현대카드 M", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2669/card_img/32807/2669card.png"},
                {rank: 2, name: "신한카드 처음(ANNIVERSE)", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2759/card_img/37240/2759card.png"},
                {rank: 3, name: "JADE Classic", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2657/card_img/32434/2657card.png"},
                {rank: 4, name: "현대카드 Summit", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2692/card_img/33549/2692card.png"},
            ],
        },
        {
            title: "체크카드 TOP100",
            items: [
                {rank: 1, name: "ONE 체크카드", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2749/card_img/38805/2749card_2.png"},
                {rank: 2, name: "노리2 체크카드(KB Pay)", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2422/card_img/27141/2422card.png"},
                {rank: 3, name: "카카오페이 신한 체크카드", image: "https://d1c5n4ri2guedi.cloudfront.net/card/286/card_img/20508/286card.png"},
                {rank: 4, name: "PAYCO 포인트 카드", image: "https://d1c5n4ri2guedi.cloudfront.net/card/2310/card_img/37661/2310card.png"},
            ],
        },
    ];

    return (
        <div className="chart">
            <div className="chart-container">
                <div className="chart-header">
                    <h2 className="chart-title">인기 차트</h2>
                    <div>
                        <nav className="chart-nav">
                            <span className="active">종합순위</span>
                            <span>카드사별 순위</span>
                            <span>혜택별 순위</span>
                            <span>기타 순위</span>
                        </nav>
                    </div>
                </div>
                <div className="chart-list">
                    {chartData.map((chart, index) => (
                        <div className="chart-item" key={index}>
                            <h3 className="chart-item-title">{chart.title}</h3>
                            <ul className="chart-item-list">
                                {chart.items.map((item, idx) => (
                                    <li key={idx} className="chart-item-entry">
                                        <img src={item.image} alt={item.name} className="chart-item-image"/>
                                        <span className="rank">{item.rank}</span>
                                        <span className="name">{item.name}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="more-button">차트 더보기</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chart;