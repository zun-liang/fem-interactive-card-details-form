import React from "react";
import cardBackImg from "../images/bg-card-back.png";

function CardBack(props) {
    return (
        <div className="card--back">
            <img src={cardBackImg} 
                 alt="card back img" 
                 className="card--img"/>
                 
            <h3 className="card--cvc">
                {props.cardData.cvc === ""
                    ? "000"
                    : props.cardData.cvc}
            </h3>
        </div>
    )
}

export default CardBack;