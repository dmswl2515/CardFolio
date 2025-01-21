import React from "react";
import { NavLink } from "react-router-dom";
import SearchButton from "./SearchButton";
import RankCard from "./RankCard";
import "./Header.css"

const Header = () => {
    return (
            <header className="header">
                {/* Header Information Section */}
                <div className="header-top">
                    <div className="header-top-left">
                        <span className="rank">
                            <RankCard />
                        </span>
                    </div>

                    <div className="header-top-center">
                        <NavLink to="/">
                            <img src="https://cardfolio.s3.ap-southeast-2.amazonaws.com/logo/CardFolio_logo.png" className="logo-image"/>
                        </NavLink>
                    </div>

                    <div className="header-top-right">
                        <span>서두르세요! 현대카드M</span>
                        <br></br>
                        <span className="event-text">최대 15만원 캐시백 제공 이벤트 </span> 
                        <img src="https://www.hyundaicard.com/img/com/card/card_ME4_BA_f.png" alt="카드이미지" className="card-image2"/>
                    </div>
                </div>

                <hr className="divider"></hr>

                {/* Logo & Navigation Section */}
                <div className="header-main">
                    
                    <nav className="nav-menu">
                        <ul>
                            <li>
                                <NavLink to="/chart" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    카드폴리오 차트 <i className="fas fa-caret-down"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/card" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    카드 <i className="fas fa-caret-down"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/company" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    카드사 <i className="fas fa-caret-down"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cashback" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    캐시백 <i className="fas fa-caret-down"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contents" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    콘텐츠 <i className="fas fa-caret-down"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/premium" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    프리미엄 <i className="fas fa-caret-down"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/mileage" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    마일리지 <i className="fas fa-caret-down"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/hotel" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    호텔 <i className="fas fa-caret-down"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cardCover" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    카드커버 <i className="fas fa-caret-down"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-icons">
                        <SearchButton />
                        <button className="cart-icon">
                            🛒
                            <spna className="cart-count">3</spna>
                        </button>
                    </div>
                </div>

                <hr className="divider"></hr>
            </header>
    );
};

export default Header;