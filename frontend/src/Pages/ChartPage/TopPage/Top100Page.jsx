import React from "react";
import CardRanking from "../../../Component/CardRanking/CardRanking";

const Top100Page = () => {
    return (
        <div>
            <CardRanking 
                title="카드폴리오 TOP 100" 
                isNewRelease={false}
            />
        </div>
    );
};

export default Top100Page;