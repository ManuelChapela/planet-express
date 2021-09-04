import React, {useEffect, useState} from 'react'

export const  GetUser =  () => {

    const [users, setUsers] = useState([])

    console.log(users)

    
    useEffect(() => {
          fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
            .then(res =>  res.json())
            .then(data => setUsers(data))
    }, [])
    
    console.log('users2', users);
    return (
        
        <div>
            <h1>Este es nuestro fántástico equipo humano</h1>
            {/* <h1>{JSON.stringtify(users, null, 2)}</h1> */}

            <ul>
                <li>{ users.map(item => item.Name) }</li>
            </ul>

          
         </div>
    
    )
    }