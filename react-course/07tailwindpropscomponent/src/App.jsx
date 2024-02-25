import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  let newArr = [1,2,3,4,5,6,7]

  return (
    <>
      <h1 className='text-3xl bg-green-500'>Vite with Tailwind</h1>
      <Card username_default= "devBhaskar" myArray = {newArr}/>
    </>
  )
}

export default App
