import React from 'react'
import {GetUser} from './../../Helpers/GetUser'

export const ModalNinja = ({fnReset}) => {

    return (
        <div>
            <div className='modal__content'>
                    <GetUser/>
                <button 
                    onClick={fnReset}
                    className='modal__button'
                    >Cerrar</button>
            </div>
        </div>
    )
}
