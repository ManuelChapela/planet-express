import React, {useState} from 'react'
import {InputDinamic} from './../InputDinamic/InputDinamic'

export const FormMain = ({}) => {

        const [inputList, setInputList] = useState ([0])

        const handleChange = (e) => { setInputList(e.target.value)}

        const fnSubmit = (height, index) => {
            const newInputList = [...inputList, 0];
            newInputList[index] = height;
            setInputList(newInputList);
        }

        const fnRes = (index) => {
            const newInputList = [...inputList].filter((item, i) =>  index !== i )
            setInputList(newInputList)
        }

       

    return (
        <>
            {inputList.map((item, i) => 
                <InputDinamic 
                    fnSubmit={fnSubmit} 
                    key={inputList[i]+i} 
                    index={i} 
                    fnRes={fnRes} 
                    valor={inputList[i]} 
                    disabled={i+1!==inputList.length}
                />)}
        </>
    )
}