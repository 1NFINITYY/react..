
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {

  const [count,setCount] =useState(0)

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {

          if(count<20){
      setCount(count+1)
    }

        }

        }>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
