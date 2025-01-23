import React from "react";
import "./WarningPage.css";

const WarningPage = ({ message }) => {
    return (
        <div className="page-background">
            <div className="common-container">
                <div className="WarningPage">
                    {message || "현재 개발중인 페이지 입니다."}
                </div>
            </div>
        </div>
    );
};

export default WarningPage;
