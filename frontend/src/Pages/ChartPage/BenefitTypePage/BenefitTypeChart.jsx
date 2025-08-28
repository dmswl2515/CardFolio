import React from "react";
import { useParams } from "react-router-dom";
import CardRanking from "../../../Component/CardRanking/CardRanking";

const BenefitTypeChart = () => {
    const { benefitType } = useParams();

    return (
        <div>
            <CardRanking 
                title={`${benefitType} TOP 30`}
                benefitTypeKeyword={benefitType}
            />
        </div>
    );
};

export default BenefitTypeChart;