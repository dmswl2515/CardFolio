import React from "react";
import "./MoreButton.css";

const MoreButton = ({ 
  text = "더보기", 
  onClick, 
  disabled = false, 
  isLoading = false,
  loadingText = "로딩 중"
}) => {
  return (
    <div className="button-container">
      <button
        className="more-cards-btn"
        onClick={onClick}
        disabled={disabled}
      >
        {isLoading ? loadingText : text}
        <i className="fa-solid fa-angle-down"></i>
      </button>
    </div>
  );
};

export default MoreButton;