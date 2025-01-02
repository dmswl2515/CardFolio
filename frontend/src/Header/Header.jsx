import React from "react";
import "./Header.css"
import logo from '../Assets/CardFolio_logo.png';

const Header = () => {
    return (
            <header className="header">
                {/* 상단 정보 영역 */}
                <div className="header-top">
                    <div className="header-top-left">
                        <span className="rank">
                            <span className="rank-number">1</span>
                            <img src="https://www.shinhancard.com/pconts/images/contents/card/plate/cdCreditAUAARH.png" alt="카드이미지" className="card-image"/>
                            <span className="card-info">신한카드 Mr.Life </span>
                            <i className="fas fa-caret-down"></i>
                        </span>
                    </div>

                    <div className="header-top-center">
                        <img src={logo} alt="Logo" className="logo-image"/>
                    </div>

                    <div className="header-top-right">
                        <span>서두르세요! 현대카드M</span>
                        <span className="event-text">최대 15만원 캐시백 제공 이벤트 </span> 
                        <img src="https://www.hyundaicard.com/img/com/card/card_ME4_BA_f.png" alt="카드이미지" className="card-image2"/>
                    </div>
                </div>

                <hr className="divider"></hr>

                {/* 로고 및 네비게이션 영역 */}
                <div className="header-main">
                    <div className="logo">
                        <img src="logo-image-url" alt="CardFolio" />
                    </div>
                    <nav className="nav-manu">
                        <ul>
                            <li>카드폴리오 차트</li>
                            <li>카드</li>
                            <li>카드사</li>
                            <li>캐시백</li>
                            <li>콘텐츠</li>
                            <li>프리미엄</li>
                            <li>마일리지</li>
                            <li>호텔</li>
                            <li>카드커버</li>
                        </ul>
                    </nav>
                    <div className="header-icons">
                        <button className="search-icon">🔍</button>
                        <button className="cart-icon">
                            🛒
                            <spna className="cart-count">3</spna>
                        </button>
                    </div>
                </div>
            </header>
    );
};

export default Header;