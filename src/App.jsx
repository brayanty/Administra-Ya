import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)
  
  const itemsNavbar = [
    {
      name: "Conocer más",
      href: "https://www.zetflix.tech"
    },
    {
      name: "Soporte",
      href: "https://www.instagram.com/brayan_tech22/"
    },
  ]

  return (
    <>
    <Navbar nameLogo="Administra Ya!!" items={itemsNavbar}/>
    </>
  )
}

export default App
