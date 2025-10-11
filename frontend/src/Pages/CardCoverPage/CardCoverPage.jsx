import React from "react";
import CardIntroduction from "../../Component/CardIntroduction/CardIntroduction";
import ContentData from "../../Component/ContentData";
import "./CardCoverPage.css";

const CardCoverPage = () => {
    const topThreeContents = [...ContentData]
        .filter(item => item.count !== undefined) 
        .sort((a, b) => b.count - a.count) 
        .slice(0, 3); 

    return (
        <div>
            <div className="page-background">
                <div className="common-container">
                    {/* Card Cover List */}
                    {/* <section className="card-cover-list">
                        <div className="card-cover-all">카드커버</div>
                        <div className="card-cover-item">베스트</div>
                        <div className="card-cover-item">카드커스텀</div>
                        <div className="card-cover-item">인기캐릭터</div>
                        <div className="card-cover-item">스폐셜콜라보</div>
                        <div className="card-cover-item">스테디라인</div>
                        <div className="card-cover-item">쇼룸</div>
                        <div className="card-cover-item">뉴스룸2</div>
                    </section> */}

                    {/* Today's Best Section */}
                    <section className="todays-best">
                        <h2>TODAY'S BEST</h2>
                        <div className="todays-best-content">
                            <div className="best-info">
                                <p>인기캐릭터</p>
                                <h3>포켓몬 151종, <br /> 가라 내 최애 포켓몬!</h3>
                                <button className="best-button">내용 확인하기 &nbsp;&nbsp;&nbsp; &gt; </button>
                                <div className="best-images">
                                    <img 
                                        src="https://d1c5n4ri2guedi.cloudfront.net/display/4960/pc_img/43014/2505_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5PC_%E1%84%91%E1%85%A9%E1%84%8F%E1%85%A6%E1%86%BA%E1%84%86%E1%85%A9%E1%86%AB.jpg"
                                        alt="Best cover 1"
                                    />
                                </div>
                            </div>
                            <div className="additional-info">
                                {topThreeContents.map((item) => (
                                    <div 
                                        key={item.id} 
                                        className="top-content"
                                        onClick={() => item.url && window.open(item.url, '_blank')}
                                        style={{ cursor: item.url ? 'pointer' : 'default' }}
                                    >
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
                </div>
            </div>

            {/* Weekly Best Section 
            <section className="weekly-best">
            <CardIntroduction 
                backgroundColor="#fff"
                circleColorClass="gray-background"
                sectionTitle1="WEEKLY BEST 5"
            />
            </section>
            */}
            
            <div className="page-background">
                <div className="common-container">
                    {/* Latest Content Section */}
                    <section className="latest-content">
                        <h2>최신 콘텐츠</h2>
                        <div className="content-grid">
                            {ContentData.map((content, index) => (
                                <div 
                                    key={index} 
                                    className="content-item"
                                    onClick={() => content.url && window.open(content.url, '_blank')}
                                    style={{ cursor: content.url ? 'pointer' : 'default' }}
                                >
                                    <img src={content.image} alt={content.name} />
                                    <div className="content-item-title">
                                        <h4>{content.name.replace(/<\/?[^>]+(>|$)/g, " ")}</h4>
                                        <p>{content.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="add-content-btn">
                            콘텐츠 더보기 
                            <i class="fa-solid fa-angle-down add-content-icon"></i>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CardCoverPage;