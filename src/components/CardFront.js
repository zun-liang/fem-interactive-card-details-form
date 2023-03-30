import React from "react";
import cardFrontImg from "../images/bg-card-front.png";
import cardLogo from "../images/card-logo.svg";

function CardFront(props) {
    return (
        <div className="card--front">
            <img src={cardFrontImg} 
                 alt="card back img" 
                 className="card--img"/>

            <img src={cardLogo} 
                 alt="card logo" 
                 className="card--logo"/>

            <h1 className="card--number">
                {props.cardData.number === "" 
                    ? "0000 0000 0000 0000" 
                    : props.cardData.number
                        .replace(/\s/g, "")
                        .replace(/(\d{4})/g, "$1 ")}
            </h1>

            <h2 className="card--name">
                {props.cardData.name === "" 
                ? "Jane Appleseed" 
                : props.cardData.name}
            </h2>
            
            <h3 className="card--month-year">
                {props.cardData.month === ""
                    ? "00"
                    : props.cardData.month}/
                {props.cardData.year === ""
                    ? "00"
                    : props.cardData.year}
            </h3>
        </div>
    )
}

export default CardFront;