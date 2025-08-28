import React from "react";
import { useParams } from "react-router-dom";
import CardRanking from "../../../Component/CardRanking/CardRanking";

const PerformanceChart = () => {
    const { performanceAmount } = useParams();

    return (
        <div>
            <CardRanking 
                title={`전월실적 ${performanceAmount} TOP 30`}
                previousPerformanceAmount={performanceAmount}
            />
        </div>
    );
};

export default PerformanceChart;