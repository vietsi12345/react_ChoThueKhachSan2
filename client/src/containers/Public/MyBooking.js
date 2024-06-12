import React, { useEffect } from 'react'
import { MybookingsItem } from '../../components'
import * as actions from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'



const MyBooking = () => {
    const { myBookings } = useSelector(state => state.booking)
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    console.log('mybookings: ', myBookings[0])


    useEffect(() => {
        dispatch(actions.getMyBooking(user?.email))
    }, [])


    return (
        <div className='flex flex-col p-5 gap-5'>
            <h1 className='text-2xl font-bold'>Danh sách đặt chỗ</h1>
            {myBookings?.map((item, index) => (
                <MybookingsItem key={index} item={item} />
            ))}
        </div>
    )
}

export default MyBooking
