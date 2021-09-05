import React, {useState} from 'react'

export const InputDinamic = ({fnSubmit, index, valor, disabled}) => {

    const [value, setValue] = useState(valor)

    const handleChange = (e) => {setValue(Number(e.target.value))}
    const handleSum = () => {fnSubmit(value, index)}

   
    return (
            <div>
                    <input 
                        className='input__dinamic'
                        type="number"
                        name='height' 
                        placeholder='Peso de tu caja'
                        value={value === 0 ? '' : value}
                        disabled={disabled}
                        onChange={handleChange}
                    />
                    <input 
                        className='button__dinamic'
                        type="button" 
                        value='Añadir caja'
                        disabled={disabled}
                        onClick={handleSum}
                    />
                    

            </div>

    )
}
