import { useState } from 'react'
import reactLogo from './assets/react.svg'
import meme from './assets/meme.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://lagcc-cuny.digication.com/carlos-andres-soler-garcia/about_me" target="_blank">
          <img src={meme} className="logo" alt="My meme" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>DO YOU KNOW THAT :</h1>
      
      <p className="read-the-docs">
       Many cats cannot properly digest cow's milk. Milk and milk products give them diarrhea.
      </p>

    </>
  )
}

export default App
