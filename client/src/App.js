import { Route, Routes } from "react-router-dom";
import { Header, Home, HomePage, DetailHome, Login, Register, Booking, BookingV2, BookingV3, Profiles, MyProfiles, MyBooking } from './containers/Public'
import { path } from "./ultils/constain";
import { System } from "./containers/System";
import HomeAdmin from './containers/Public/AdminPage/HomeAdmin'
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../src/store/actions"
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const jwt = localStorage.getItem('jwt')
  useEffect(() => {
    dispatch(actions.getUserByToken(jwt))
  }, [jwt])
  console.log(user)
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path='*' element={< HomePage />} />
          <Route path={path.DETAIL__NAME__ID} element={< DetailHome />} />
          <Route path={path.LOGIN} element={< Login />} />
          <Route path={path.REGISTER} element={< Register />} />
          <Route path={path.PROFILES} element={<Profiles />} >
            <Route path={path.MYPROFILES} element={<MyProfiles />} />
            <Route path={path.MYBOOKING} element={<MyBooking />} />
          </Route>

        </Route>
        <Route path={path.BOOKING} element={<Booking />} />
        <Route path={path.BOOKINGV2} element={<BookingV2 />} />
        <Route path={path.BOOKINGV3} element={<BookingV3 />} />
        <Route path={path.SYSTEM} element={<System />} />
        <Route path={path.ADMIN} element={<HomeAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
