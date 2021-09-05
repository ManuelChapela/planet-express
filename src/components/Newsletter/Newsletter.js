import React, {useState} from 'react'
import Modal from './../Modal/Modal'

export const Newsletter = ({fn}) => {

    const [user, setUser] = useState()

    const handleChange = (e) => {
        setUser(e.target.value)}

  
        const handleSubmit = () => {

            const re = /^\S+@\S+\.\S+$/;
        
            const verify = re.test(String(user).toLowerCase()); 

            console.log(verify);

            if(verify){
                fn(user)
            }else{alert('Has intentado trolearme, escribe un mail :)')}

        }


    return (
        <div className='footer-newsletter__container'>
            <h2 className='footer-newsletter__title'> ¿Quieres estar al tanto de nuestras novedades y ofertas?</h2>
            <h2 className='footer-newsletter__title'>Suscríbete a nuestra newsletter:</h2>

            <input 
                className='input__dinamic' 
                type="text" 
                placeholder='wonderful@gmail.com'
                onChange={handleChange}
                />

            <button 
                className='button__dinamic'
                onClick={handleSubmit}
            >
                Suscribirme
            </button>   

        </div>
    )
}
