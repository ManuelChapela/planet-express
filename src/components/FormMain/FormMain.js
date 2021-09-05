import React, {useState} from 'react'
import {InputDinamic} from './../InputDinamic/InputDinamic'

export const FormMain = ({fn, fn2}) => {

        const [inputList, setInputList] = useState ([0])

        const test = inputList.length > 1 ? inputList.reduce((a,b) => a + b) : 0

        console.log('inputList', test);

        // const handleChange = (e) => { setInputList(e.target.value)}

        const fnSubmit = (height, index) => {
            console.log('index', index);
            const newInputList = [...inputList, 0];
            newInputList[index] = height;
            setInputList(newInputList);

        }
        const fnSend = () => {
            fn2(test)
        }
        


     
       

    return (
        <>
            {inputList.map((item, i) => 
                <InputDinamic 
                    fnSubmit={fnSubmit} 
                    key={inputList[i]+i} 
                    index={i} 
                    valor={inputList[i]} 
                    disabled={i+1!==inputList.length}
                />)}
                <button onClick={fnSend} className='button__app'>Calcular precio</button>
        </>
    )
}