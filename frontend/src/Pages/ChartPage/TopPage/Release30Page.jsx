import React from "react";
import CardRanking from "../../../Component/CardRanking/CardRanking";

const Release30Page = () => {
    return (
        <div>
            <CardRanking 
                title={"신규카드 TOP 30"}
                isNewRelease={true}
                showTabs={false}
            />
        </div>
    );
};

export default Release30Page;