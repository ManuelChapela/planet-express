import React from 'react'

export const Modal = ({fnReset, text, mail}) => {

    return (
        <div className='modal__contenido'>
            <div className='modal'>
                <h2 className='modal__text'>{text}</h2>
                <h2 className='modal__text'>{mail}</h2>
                <button 
                    className='button__dinamic'
                    onClick={fnReset}>Close</button>
            </div>
        </div>
    )
}


