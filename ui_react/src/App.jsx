import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import WebLayout from './layouts/Weblayout'




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback="Loading........">
          <Routes>
            <Route element={<WebLayout />}>
         
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>
            
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App