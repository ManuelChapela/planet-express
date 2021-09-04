import React from 'react'
import {GetUser} from './../../Helpers/GetUser'

export const ModalNinja = ({fnReset}) => {


    return (
        <div>
            {/* <h1>Este es nuestro equipo</h1>
            <h2>Manuel (name)</h2>
            <h2>Transportista (profesion)</h2>
            <div>Imagen aquí</div> */}
            <div>
            <GetUser/>

            </div>
            
            <button onClick={fnReset}>Close</button>
        </div>
    )
}
