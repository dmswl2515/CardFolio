import React from "react";
import { useParams } from "react-router-dom";
import CompanyDetail from "../../Component/CompanyDetail/CompanyDetail";

const CompanyDetailPage = () => {
    const { companyName } = useParams();

    return (
        <div className="page-background">
            <div className="common-container">
                <CompanyDetail companyName={companyName} />
            </div>
        </div>
    );
};

export default CompanyDetailPage;