import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SearchComponent from "./SearchButton";
import RankCard from "./RankCard";
import "./Header.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

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
                        <img src="https://d1c5n4ri2guedi.cloudfront.net/display/4468/pc_img/38928/%28%E1%84%89%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%BC%29-top_p_600x100.jpg" alt="카드이미지" className="card-image2"/>
                    </div>
                </div>

                <hr className="divider"></hr>

                {/* Logo & Navigation Section */}
                <div className="header-main">
                    {/* Hanbers button */}
                    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <FaBars />
                    </button>

                    {/* Drawer menu */}
                    <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
                        <ul>
                            <li>
                                <NavLink to="/chart" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    카드폴리오 차트 <i className="fas fa-caret-down down-icon"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/card" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    카드 <i className="fas fa-caret-down down-icon"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/company" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    카드사 <i className="fas fa-caret-down down-icon"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cashback" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    캐시백 <i className="fas fa-caret-down down-icon"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contents" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    콘텐츠 <i className="fas fa-caret-down down-icon"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/premium" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    프리미엄 <i className="fas fa-caret-down down-icon"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/mileage" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    마일리지 <i className="fas fa-caret-down down-icon"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/hotel" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    호텔 <i className="fas fa-caret-down down-icon"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cardCover" className={({ isActive }) => isActive ? "active-link" : ""}>
                                    카드커버 <i className="fas fa-caret-down down-icon"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div
                        className={`nav-overlay ${menuOpen ? "open" : ""}`}
                        onClick={closeMenu}
                    ></div>

                    <div className="header-icons">
                        <div className="search-icon">
                            <SearchComponent />
                        </div>
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