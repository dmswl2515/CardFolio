import React from "react";
import ContentData from "../../Component/ContentData";
import "./CardCoverPage.css";

const CardCoverPage = () => {
    const topThreeContents = [...ContentData]
        .filter(item => item.count !== undefined) 
        .sort((a, b) => b.count - a.count) 
        .slice(0, 3); 

    return (
        <div className="page-background">
            <div className="common-container">
                {/* Card Cover List */}
                <section className="card-cover-list">
                    <div className="card-cover-all">카드커버</div>
                    <div className="card-cover-item">베스트</div>
                    <div className="card-cover-item">카드커스텀</div>
                    <div className="card-cover-item">인기캐릭터</div>
                    <div className="card-cover-item">스폐셜콜라보</div>
                    <div className="card-cover-item">스테디라인</div>
                    <div className="card-cover-item">쇼룸</div>
                    <div className="card-cover-item">뉴스룸</div>
                </section>

                {/* Today's Best Section */}
                <section className="todays-best">
                    <h2>TODAY'S BEST</h2>
                    <div className="todays-best-content">
                        <div className="best-info">
                            <p>인기캐릭터</p>
                            <h3>고스티 하이큐 정품 카드커버 출시! <br /> 유니폼 마킹 카드 만들기🏐</h3>
                            <button className="best-button">내용 확인하기 &nbsp;&nbsp;&nbsp; &gt; </button>
                            <div className="best-images">
                                <img 
                                    src="https://d1c5n4ri2guedi.cloudfront.net/display/4960/pc_img/37965/2410_%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8_%ED%95%98%EC%9D%B4%ED%81%90_%EB%85%B8%ED%8A%B8%EB%B6%81_%EC%88%98%EC%A0%95.jpg"
                                    alt="Best cover 1"
                                />
                            </div>
                        </div>
                        <div className="additional-info">
                            {topThreeContents.map((item) => (
                                <div key={item.id} className="top-content">
                                    <div className="top-content-img-container">
                                        <img src={item.image} alt={item.name} className="top-content-image"/>
                                    </div>
                                    <div className="top-contnet-title">
                                        <p className="top-content-category">{item.category}</p>
                                        <h4 className="top-content-name" dangerouslySetInnerHTML={{ __html: item.name }}></h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Weekly Best Section */}
                <section className="weekly-best">
                    <h2>WEEKLY BEST 5</h2>
                </section>

                {/* Latest Content Section */}
                <section className="latest-content">
                    <h2>최신 콘텐츠</h2>
                    <div className="content-grid">
                        {ContentData.map((content, index) => (
                            <div key={index} className="content-item">
                                <img src={content.image} alt={content.name} />
                                <div className="content-item-title">
                                    <h4>{content.name}</h4>
                                    <p>{content.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CardCoverPage;