import React from "react";
import "./WarningPage.css";

const WarningPage = ({ message }) => {
    return (
        <div className="WarningPage">
            {message || "현재 개발중인 페이지 입니다."}
        </div>
    );
};

export default WarningPage;
