import React from 'react'

export const Modal = ({fnReset, text, mail}) => {


    return (
        <div>
            <h2>{text}</h2>
            <h2>{mail}</h2>
            <button onClick={fnReset}>Close</button>
        </div>
    )
}
