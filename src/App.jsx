import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './components/pages/Home'
import {Routes, Route} from 'react-router-dom'
import Favorites from './components/pages/Favorites'
import Navbar from './components/Navbar'
import { MovieProvider } from './components/contexts/MovieContext'

function App() {

  return (
    
    <MovieProvider> 
      <Navbar/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favourites" element={<Favorites/>} />
        </Routes>
      </main>
    </MovieProvider>
  
  )
}



export default App
