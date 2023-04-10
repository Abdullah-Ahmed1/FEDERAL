import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import AboutUs from './pages/AboutUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route  path='/'  element={<Home/>} />
        <Route  path='/store'  element={<Store/>} />
        <Route  path='/about'  element={<AboutUs/>} />
      </Routes>
    
    </div>
  )
}

export default App
