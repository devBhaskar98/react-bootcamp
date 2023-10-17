import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState({})

  const addValue = () => {
    counter = counter + 1;
    console.log('counter', counter)
  }

  let counter = 15
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
