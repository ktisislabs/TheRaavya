import React from 'react'
import {Routes,Route} from 'react-router-dom'
import OpeningLoader from '../Pages/OpeningLoader'
import Home from '../Pages/Home'

function AllRoutes() {
  return (
   <>
<Routes>
    <Route path='/' element={<OpeningLoader/>}/>
    <Route path='/Home' element={<Home/>}/>
</Routes>

   </>
  )
}

export default AllRoutes