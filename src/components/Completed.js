import React from "react"
import completedIcon from "../images/icon-complete.svg"

const Completed = props =>
    <>
        {props.toggle === "yes" &&
            <div className="completed--container">
                <img src={completedIcon} 
                        alt="complete icon" 
                        className="completed--logo"/>

                <h2 className="completed--thank">
                    Thank you!
                </h2>

                <h3 className="completed--explain">
                    We've added your card details
                </h3>
                
                <button 
                    className="button completed--button" 
                    onClick={props.reset}>
                    Continue
                </button>
            </div>}
    </>
    

export default Completed