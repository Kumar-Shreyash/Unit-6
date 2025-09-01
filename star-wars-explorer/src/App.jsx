import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from "./components/Home"
import { People } from './components/People'
import { Details } from './components/Details'
import { Planet } from './components/Planets'
import { Species } from './components/Species'
import { Vehicles } from './components/Vehicles'
import { Starships } from './components/Starships'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/people' element={<People/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/planets' element={<Planet/>}/>
      <Route path='/species' element={<Species/>}/>
      <Route path='/vehicles' element={<Vehicles/>}/>
      <Route path='/starships' element={<Starships/>}/>
     </Routes>
    </>
  )
}

export default App
