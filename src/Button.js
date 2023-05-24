import React from "react"
import './Button.css'

const Button = ({ someFunction, buttonName }) => {
    return(
        <button onClick={someFunction}>
            {buttonName}
        </button>
    )
}

export default Button