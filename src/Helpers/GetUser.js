import React, {useEffect, useState} from 'react'

export const  GetUser =  () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
          fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
            .then(res =>  res.json())
            .then(data => setUsers(data))
    }, [])
    
    return (
        
        <div>
            <h1>Este es nuestro fántástico equipo humano</h1>

            <ul>
                <li>{ users.map(item => {
                    <p>
                        <br /> 
                        <img src={item.PicUrl} alt=""/> 
                            {`Nombre: ${item.Name}`} 
                        <br/> 
                            {`Profesión: ${item.Profession}`} 
                        <br /> 
                    </p>}
                    )}
               </li>
            </ul>
         </div>
    
    )
    }