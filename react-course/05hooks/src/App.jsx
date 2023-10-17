import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
   setCounter(counter+1)
  }

  // let counter = 15
  return (
    <>
      <h1>React Course</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button>Remove value</button>

      <p> Footer: {counter}</p>
    </>
  )
}

export default App
