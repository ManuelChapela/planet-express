import React, {useState} from 'react'

export const InputDinamic = ({fnSubmit, index, fnRes, valor, disabled}) => {

    const [value, setValue] = useState(valor)

    const handleChange = (e) => {setValue(e.target.value)}
    const handleSum = () => {fnSubmit(value, index)}
    const handleRes = () => {fnRes(index)}

    return (
            <div>
                    <input 
                        type="number"
                        name='height' 
                        placeholder='Peso de la caja 1'
                        value={value === 0 ? '' : value}
                        disabled={disabled}
                        onChange={handleChange}
                    />
                    <input 
                        type="button" 
                        value='+'
                        disabled={disabled}
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
