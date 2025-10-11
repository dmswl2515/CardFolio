import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import RankCard from "./RankCard";
import CardSelectionModal from "../CardSelectionModal/CardSelectionModal";
import "./Header.css"

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    // localStorage에서 장바구니 개수 가져오기
    const updateCartCount = () => {
        const cartData = JSON.parse(localStorage.getItem('cardfolio_cart') || '[]');
        setCartCount(cartData.length);
    };

    useEffect(() => {
        // 초기 로드 시 장바구니 개수 설정
        updateCartCount();

        // localStorage 변경 감지를 위한 이벤트 리스너
        const handleStorageChange = () => {
            updateCartCount();
        };

        window.addEventListener('storage', handleStorageChange);
        
        // 같은 탭에서 localStorage 변경 감지를 위한 커스텀 이벤트
        window.addEventListener('cartUpdated', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('cartUpdated', handleStorageChange);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleSearchClick = () => {
        setIsSearchModalOpen(true);
    };

    const handleSelectCard = (cardItem) => {
        // 장바구니에 카드 추가
        const existingCart = JSON.parse(localStorage.getItem('cardfolio_cart') || '[]');
        const isAlreadyInCart = existingCart.some(item => item.cardId === cardItem.cardId);
        
        if (!isAlreadyInCart && existingCart.length < 3) {
            const updatedCart = [...existingCart, cardItem];
            localStorage.setItem('cardfolio_cart', JSON.stringify(updatedCart));
            window.dispatchEvent(new Event('cartUpdated'));
            alert('비교함에 추가되었습니다!');
        } else if (isAlreadyInCart) {
            alert('이미 비교함에 있는 카드입니다.');
        } else {
            alert('최대 3개까지만 비교할 수 있습니다.');
        }
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
                        <img src="https://d1c5n4ri2guedi.cloudfront.net/display/4435/pc_img/43970/CardGorilla_TOP_PC.jpg" alt="카드이미지" className="card-image2"/>
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
                            {/* <li>
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
                            </li> */}
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
                        <div className="search-icon" onClick={handleSearchClick}>
                            🔍
                        </div>
                        <button className="cart-icon" onClick={() => navigate('/cart')}>
                            🛒 
                            <span className="cart-count">{cartCount}</span>
                        </button>
                    </div>
                </div>

                <hr className="divider"></hr>
                
                <CardSelectionModal 
                    isOpen={isSearchModalOpen}
                    onClose={() => setIsSearchModalOpen(false)}
                    onSelectCard={handleSelectCard}
                />
            </header>
    );
};

export default Header;