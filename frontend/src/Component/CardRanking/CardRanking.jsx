import React from "react";
import { Card } from "@components/ui/card";

const CardRanking = ({ cards }) => {
    const soredCards = [...cards].sort((a, b) => b.count - a.count);

    return (
        <div>

        </div>
    );
}

export default CardRanking;