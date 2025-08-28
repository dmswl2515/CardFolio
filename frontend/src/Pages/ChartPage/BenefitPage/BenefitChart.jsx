import React from "react";
import { useParams } from "react-router-dom";
import CardRanking from "../../../Component/CardRanking/CardRanking";

const BenefitChart = () => {
    const { benefitCategory } = useParams();

    return (
        <div>
            <CardRanking 
                title={`${benefitCategory} TOP 10`}
                benefitCategory={benefitCategory}
            />
        </div>
    );
};

export default BenefitChart;