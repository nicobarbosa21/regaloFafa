import { useState } from 'react'
import './App.css'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>FELIZ CUMPLEAÑOS</h1>
      <h3>Bienvenidos a Fafá clicker</h3>
        <img src='../imagenes/fafa_boton2.png' alt="Fafá" onClick={() => setCount((count) => count + 1)} style={{cursor: 'pointer'}} className="pressable" />
      </div>
      <div className="card">
        <h2>La cantidad de fafás apretados es {count}</h2>
      </div>
      {count >= 10 && <p>Llegaste a 10 fafás apretados, a los 100 hay recompensa</p>}
      {count >= 20 && <p>Llegaste a 20 fafás apretados, cada vez falta menos</p>}
      {count >= 50 && <p>Llegaste a 50 fafás apretados, vas por la mitad del camino</p>}
      {count >= 100 && <p>Llegaste a 100 fafás apretados, aquí tienes tu recompensa <br /><br /> <a href="https://youtube.com/shorts/4jX8WxBtY7U?feature=share" target='_blank'>Recompensa final</a></p>}
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
