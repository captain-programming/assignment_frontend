import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About';
import AwardHonars from '../pages/AwardHonars';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders';
import Partners from '../pages/Partners';
import PaymentInfo from '../pages/PaymentInfo';
import ProductListing from '../pages/ProductListing';
import TeamMebers from '../pages/TeamMebers';

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='/orders' element={<Orders />}></Route>
      <Route path='/team-members' element={<TeamMebers />}></Route>
      <Route path='/partners' element={<Partners />}></Route>
      <Route path='/product-listing' element={<ProductListing />}></Route>
      <Route path='/award-honars' element={<AwardHonars />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/payment' element={<PaymentInfo />}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes;