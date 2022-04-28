import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Register, Landing, Error, ProtectedRoute} from './pages'
import { AddBook, AllBooks, Profile, SharedLayout } from './pages/dashboard'


const App = () => {
  return (
    <div>
     <BrowserRouter >
     <Routes>
       <Route path="/" element={
          <ProtectedRoute> 
            <SharedLayout />
          </ProtectedRoute>} >
       </Route>
       <Route path='/add-book' element={<AddBook />}></Route>
         <Route path= '/all-books' element={<AllBooks />}></Route>
         <Route path='/profile' element={<Profile />}></Route>
      
       <Route path="/register" element={<Register />}/>
       <Route path="/landing" element={<Landing/>}/>
       <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
