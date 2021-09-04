import React, {useState, useEffect} from 'react'

export const InputDinamic = ({fnSubmit, index, fnRes, valor}) => {

    const [value, setValue] = useState()

    const handleChange = (e) => {setValue(e.target.value)}
    const handleSum = () => {fnSubmit(value, index)}
    const handleRes = () => {fnRes(index)}

    useEffect(() => {
       setValue(valor)
    }, [])
    

    return (
            <div>
                    <input 
                        type="number"
                        name='height' 
                        placeholder='Peso de la caja 1'
                        value={value === 0 ? '' : value}
                        onChange={handleChange}
                    />
                    <input 
                        type="button" 
                        value='+'
                        onClick={handleSum}
                    />
                    <input 
                        type="button" 
                        value='-'
                        onClick={handleRes}
                    />

                
            </div>

    )
}
