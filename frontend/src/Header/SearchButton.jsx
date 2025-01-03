import React, { useState } from "react";

function SearchButton() {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
    };

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {showMessage && <span className="search-message">검색어를 입력하세요</span>}
            <button className="search-icon" onClick={handleClick}>
                🔍
            </button>
        </div>
    );
}

export default SearchButton;