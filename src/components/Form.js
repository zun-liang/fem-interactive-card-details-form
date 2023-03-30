import React from "react";

function Form(props) {
    return (
        <>
        {props.toggle === "no" &&
            <form className="form" 
                  onSubmit={props.handleSubmit}>
                
                <div className="form--container">
                    <label htmlFor="cardName" 
                           className="form--label">
                        Cardholder Name
                    </label>

                    <input 
                        type="text"
                        id="cardName"
                        name="name"
                        value={props.cardData.name}
                        placeholder="e.g. Jane Appleseed"
                        onChange={props.handleChange}
                        className={`input 
                                    input--large 
                                    ${props.errors.name
                                        || !props.regexResult.name 
                                            ? "input--error" 
                                            : ""}`}/>
                    
                    <p className={props.errors.name 
                                    ? "alertShown" 
                                    : "alertHidden"}>
                        Can't be blank
                    </p>

                    <p className={!props.regexResult.name 
                                    ? "alertShown" 
                                    : "alertHidden"}>
                        Wrong format, letters and spaces only
                    </p>
                </div>
                
                <div className="form--container">
                    <label htmlFor="cardNumber" 
                           className="form--label">
                        Card Number
                    </label>

                    <input 
                        type="text"
                        id="cardNumber"
                        name="number"
                        value={props.cardData.number}
                        placeholder="e.g. 1234 5678 9123 0000"
                        onChange={props.handleChange}
                        className={`input 
                                    input--large 
                                    ${props.errors.number 
                                        || !props.regexResult.number
                                            ? "input--error" 
                                            : ""}`}/>

                    <p className={props.errors.number 
                                    ? "alertShown" 
                                    : "alertHidden"}>
                        Can't be blank
                    </p>

                    <p className={!props.regexResult.number 
                                    ? "alertShown" 
                                    : "alertHidden"}>
                        Wrong format, 16-digit numbers only
                    </p>
                </div>

                <div className="form--exp-cvc">
                    <div className="form--container">
                        <label htmlFor="month" 
                               className="form--label">
                            Exp. Date (MM/YY)
                        </label>

                        <input 
                            input="text"
                            id="cardMonth"
                            name="month"
                            value={props.cardData.month}
                            placeholder="MM"
                            onChange={props.handleChange}
                            className={`input 
                                        input--xs 
                                        ${props.errors.month 
                                            || !props.regexResult.month 
                                                ? "input--error" 
                                                : ""}`}/>

                        <label htmlFor="cardYear" 
                                className="form--label invisible">
                        </label>

                        <input 
                            type="text"
                            id="cardYear"
                            name="year"
                            value={props.cardData.year}
                            placeholder="YY"
                            onChange={props.handleChange}
                            className={`input 
                                        input--xs 
                                        ${props.errors.year 
                                            || !props.regexResult.year 
                                                ? "input--error" 
                                                : ""}`}/>

                        <p className={props.errors.month 
                                        || props.errors.year 
                                           ? "alertShown" 
                                           : "alertHidden"}>
                            Can't be blank
                        </p>

                        <p className={!props.regexResult.month 
                                         || !props.regexResult.year 
                                            ? "alertShown" 
                                            : "alertHidden"}>
                             Wrong format, 2-digit numbers only
                        </p>
                    </div>

                    <div className="form--container">
                        <label htmlFor="cardCVC" 
                                className="form--label">
                            CVC
                        </label>

                        <input 
                            type="text"
                            id="cardCVC"
                            name="cvc"
                            value={props.cardData.cvc}
                            placeholder="e.g. 123"
                            onChange={props.handleChange}
                            className={`input 
                                        input--medium 
                                        ${props.errors.cvc 
                                            || !props.regexResult.cvc 
                                                ? "input--error" 
                                                : ""}`}/>

                        <p className={props.errors.cvc 
                                        ? "alertShown" 
                                        : "alertHidden"}>
                            Can't be blank
                        </p>

                        <p className={!props.regexResult.cvc 
                                        ? "alertShown" 
                                        : "alertHidden"}>
                            Wrong format, 3-digit numbers only
                        </p>
                    </div>
                </div>

                <button className="button">
                    Confirm
                </button>
            </form>}
        </>
    )
}

export default Form;
