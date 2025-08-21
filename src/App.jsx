import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlipCard from './components/FlipCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlipCard />
    </>
  )
}

export default App
