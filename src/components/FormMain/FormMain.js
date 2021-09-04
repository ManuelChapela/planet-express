import React, {useState} from 'react'
import {InputDinamic} from './../InputDinamic/InputDinamic'

// export const FormMain = () => {

//     // const [inputValue, setInputValue] = useState({value: 0})
//     const [inputField, setInputField] = useState([{value:0}]);

//     const handleClicSum = (e) => setInputField({value: inputField + 1})
//     const handleClicRes = () => {console.log('restando')}

//     // const handleValue = (e) => setInputField({value: inputField + 1})

//   console.log(inputField)

//     return (
//         <>
//             <form action="">
//                 {inputField.map((inputField, i) => (
//                     <div key={i} className='input-form'>
//                          <input 
//                             type="text" 
//                             placeholder={`Peso del paquete ${i + 1}`} 
//                             // value={handleValue}
//                             // value={inputField.height}
//                             />
//                         <button onClick={handleClicSum}>+</button>
//                         <button onClick={handleClicRes}>-</button>
//                     </div>
//                 ))}


//             </form>
//         </>
//     )
// }


export const FormMain = () => {

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

            {inputList.map((item, i) => <InputDinamic fnSubmit={fnSubmit} key={i} index={i} fnRes={fnRes} valor={inputList[i]}/>)}

            



                {/* <pre>
                    {JSON.stringify(inputList, null, 2)}
                </pre> */}
                  
                    {/* <form action="">
                        
                        {
                            form.map((item, index) => {
                                <div key={`item-${index}`}>
                                    <input 
                                        type="text" 
                                        className='form-control'
                                        placeholder={`Peso de la caja ${index + 1}`}    
                                        value={}
                                        onChange={() => onChange(index,e)}
                                    />
                                </div>
                            })
                        }
                       
                    </form>

                    <div>
                        <button className='btn-sub-input'> - </button>
                        <button className='btn-add-input'> + </button>
                    </div> */}





        </>
    )


}