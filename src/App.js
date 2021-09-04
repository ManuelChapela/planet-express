import './App.css';
import  {useState} from 'react'
import planetExpressLogo from './assets/planet-express-logo.png';
import { Countdown } from './components/CountdownNumbers/Countdown';
import {FormMain} from './components/FormMain/FormMain'
import {Newsletter} from './components/Newsletter/Newsletter'
import {Modal} from './components/Modal/Modal'


function App() {

  // const [modal, setModal] = useState('')
  const [email, setEmail] = useState('')
  const [ninjas, setNinjas] = useState('')
 
  const saveEmail = (mail) => { setEmail(mail) }
  const reset = () => setEmail('')

  const pruebaNinjas = () => {setNinjas('Has dado clic en saber más')}


  return (
    <div className="App">
        {email 
          ? 
         
            <Modal 
              fnReset={reset}
              mail={email} 
              text='Te has registrado correctamente con tu mail:' 
            /> 
      
          : 
      
            

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
                    <p>¿Quieres saber cuantos euritos te vas a dejar en tu envío?</p>
                    <p>Calcúlalos aquí:</p>
                    <FormMain />
                    <Newsletter fn={saveEmail} />
                </div>

                <div>
                    <h1>Tenemos un fantástico equipo de Ninjas que trabajan para ti</h1>
                    <button onClick={pruebaNinjas}>Saber más</button>

                    <h1>{ninjas}</h1>
                </div>
            </div>
            
          } 


          


         
    </div>
  );
}

export default App;
