import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slidebar from './components/Slidebar'
import Card from './components/Card'
import Modal from './components/Modal'
import Foot from './components/Foot'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Navbar/>
      <Slidebar/>
      <Card/>
      <Modal/>
      <Foot/>
    </>
  )
}

export default App
