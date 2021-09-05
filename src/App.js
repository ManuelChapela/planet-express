import './App.css';
import  {useState} from 'react'
import planetExpressLogo from './assets/planet-express-logo.png';
import { Countdown } from './components/CountdownNumbers/Countdown';
import {FormMain} from './components/FormMain/FormMain'
import {Newsletter} from './components/Newsletter/Newsletter'
import {Modal} from './components/Modal/Modal'
import {ModalNinja} from './components/Modal/ModalNinja'



function App() {

  const [email, setEmail] = useState('')
  const [ninjas, setNinjas] = useState('')
  
  const [height, setHeight] = useState([])

 
  const saveEmail = (mail) => { setEmail(mail) }
  
  // const saveHeight = (kg) => {setHeight(kg)}
  const sumKg = (kg) => {setHeight(kg)}

  console.log('HEIGHT', height);

  
  
  const reset = () => {
    setEmail('') 
    setNinjas('')
  }
  
  
  const showNinjas = () => setNinjas('Has dado clic en saber más')
  
  
  
  // console.log(height);
  console.log(height);
  // console.log(height.parseInt().reduce((a,b)=> a+b));

  





  return (
    <div className="App">
        {email !== ''
          ? 
            <Modal 
              fnReset={reset}
              mail={email} 
              text='Te has registrado correctamente con tu mail:' 
            /> : ''}
      
          
          { ninjas !== '' ? 
            <ModalNinja 
              className='modal__team'
              fnReset={reset}
              /> : ''}
           
      
            { ninjas === '' && email === '' ?

            <div className='App__header'>
      
                <div className='app__header-logo'>
                  <h1>PLANET EXPRESS</h1>
                  <img src={planetExpressLogo} alt="Planet Express Logo" className='planet-express__mainLogo'/>
                </div>

                <div className='app__body-countdown'>
                  <h2>¡Ofertón! Envío al 50% hasta finales de año.</h2>
                  <Countdown/>
                </div> 

                <div className='app__body-packages'>
                  <div className='app__body-packages-left'>
                    <h2>¿Quieres saber cuantos euritos te vas a dejar en tu envío?</h2>
                    <p>Calcúlalos aquí:</p>
                    <FormMain  fn2={sumKg}/>
                  </div>

                  <div className='app__body-packages-right'>
                    <p>El precio del envío es: {height*2.17.toFixed(2)} € </p>
                  </div>
                </div>
                   
                <div className='app__newsletter-container'>
                    <h2>Tenemos un fantástico equipo de Ninjas que trabajan para ti</h2>
                    <button className='button__app' onClick={showNinjas}>Saber más</button>

                </div>
                <div className='app__newsletter-component'>
                    <Newsletter fn={saveEmail} />
                </div>
                    
            </div>
            : ''
        }
          


          


         
    </div>
  );
}

export default App;
