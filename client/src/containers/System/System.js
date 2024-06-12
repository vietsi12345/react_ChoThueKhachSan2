import React from 'react'
import { TestLinhTinh } from '../../components/AdminPage'
import { Routes, Route } from 'react-router-dom'
import HomeAdmin from '../../../src/components/AdminPage/HomeAdmin/HomeAdmin'
import Orders from '../../components/AdminPage/Orders/Orders'
import AdminSlideBar from '../../components/AdminPage/AdminSlideBar/AdminSlideBar'
import Customer from '../../components/AdminPage/Customer/Customer'
import { MyAccount } from '../../components/AdminPage/MyAccount/MyAccount'
import { Statistics } from '../../components/AdminPage/Statistics/Statistics'
import { RoomAdmin } from '../../components/AdminPage/RoomAdmin/RoomAdmin'
import { AdminHotel } from '../../components/AdminPage/AdminHotel/AdminHotel'
import OrderDetailAdmin from '../../components/AdminPage/Orders/OrderDetailAdmin'

const System = () => {
  const handleClose = () => {

  }
  return (
    <div>
      <div className='lg:flex justify-between'>
        <div>
          <AdminSlideBar handleClose={handleClose} />
        </div>

        <div className='lg:w-[80%] px-10'>
          <Routes>
            <Route path='/' element={<HomeAdmin />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/order/*' element={<OrderDetailAdmin />} />
            <Route path='/customers' element={<Customer />} />
            <Route path='/rooms' element={<RoomAdmin />} />
            <Route path='/myaccount' element={<MyAccount />} />
            <Route path='/hotels' element={<AdminHotel />} />
            <Route path='/statistics' element={<Statistics />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default System
