import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import To_Do_list from './To_Do_list'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <To_Do_list />
      
    </>
  )
}

export default App
