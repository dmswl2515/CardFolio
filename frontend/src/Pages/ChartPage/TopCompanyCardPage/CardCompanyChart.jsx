import React from "react";
import { useParams } from "react-router-dom";
import CardRanking from "../../../Component/CardRanking/CardRanking";

const CardCompanyChart = () => {
    const { cardCompany } = useParams();

    return (
        <div>
            <CardRanking 
                title={`${cardCompany} TOP 100`}
                cardCompany={cardCompany}
            />
        </div>
    );
};

export default CardCompanyChart;