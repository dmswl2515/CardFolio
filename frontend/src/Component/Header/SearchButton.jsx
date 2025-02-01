import React, { useState } from "react";

function SearchButton() {
    const [showInput, setShowInput] = useState(false);

    const handleClick = () => {
        setShowInput((prev) => !prev);
    };

    return (
        <div 
            style={{ 
                display: "flex", 
                alignItems: "center", 
                fontSize: "14px",
            }}>

            {showInput && (
                <input 
                    type="text"
                    placeholder="검색어를 입력하세요."
                    className="serach-input"
                    style={{
                        width: "120px",
                        padding: "8px",
                        textAlign: "center",
                        border: "none", 
                        borderRadius: "20px",
                        background: "#F4F2F2",
                     }}
                />
            )}
            
            
            <button className="search-icon" onClick={handleClick}>
                🔍
            </button>
        </div>
    );
}

export default SearchButton;