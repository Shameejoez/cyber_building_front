import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Header } from './components/Header/Header'
import { Outlet } from 'react-router'
import Burger from '../public/images/icons/burger.svg?react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <main className='flex relative w-full h-full justify-start items-start flex-col mt-28 overflow-hidden'>

        <Outlet/>
     </main>
  </>
  )
}

export default App
