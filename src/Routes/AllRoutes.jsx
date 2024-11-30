import React from 'react'
import {Routes,Route} from 'react-router-dom'
import OpeningLoader from '../Pages/OpeningLoader'
import Home from '../Pages/Home'
import About from '../Pages/About'
import HomeDecor from '../Pages/HomeDecor' ; 
import Furniture from '../Pages/Furniture' ; 
import BulkOrder from '../Pages/BulkOrder' ; 
import Contact from '../Pages/Contact'

function AllRoutes() {
  return (
   <>
<Routes>
    <Route path='/' element={<OpeningLoader/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/HomeDecor' element={<HomeDecor/>}/>
    <Route path='/Furniture' element={<Furniture/>}/>
    <Route path='/BulkOrder' element={<BulkOrder/>}/>
    <Route path='/Contact' element={<Contact/>}/>
</Routes>

   </>
  )
}

export default AllRoutes ; 