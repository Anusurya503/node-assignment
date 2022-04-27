import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error} from './pages'
import { AddBook, AllBooks, Profile, SharedLayout } from './pages/dashboard'


const App = () => {
  return (
    <div>
     <BrowserRouter >
     <Routes>
       <Route path="/" element={<div>Dashboard</div>}/>
       <Route path="/register" element={<Register />}/>
       <Route path="/landing" element={<Landing/>}/>
       <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
