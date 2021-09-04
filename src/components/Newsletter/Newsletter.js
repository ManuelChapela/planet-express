import React, {useState} from 'react'
import Modal from './../Modal/Modal'

export const Newsletter = ({fn}) => {

    const [user, setUser] = useState()

    const handleChange = (e) => {setUser(e.target.value)}

    const handleSubmit = () => {
        fn(user)
    }

    const handleClose = () => {}




    return (
        <div className='footer-newsletter__container'>
            <h1 className='footer-newsletter__title'> ¿Quieres estar al tanto de nuestras novedades y ofertas?</h1>
            <h2 className='footer-newsletter__subtitle'>Suscríbete a nuestra newsletter</h2>

            <input 
                className='footer-newsletter__input' 
                type="text" 
                placeholder='tumaravilloso@mail.com'
                onChange={handleChange}
                />

            <button 
                className='footer-newsletter__button'
                onClick={handleSubmit}
            >Suscribirme
            </button>   

        </div>
    )
}
