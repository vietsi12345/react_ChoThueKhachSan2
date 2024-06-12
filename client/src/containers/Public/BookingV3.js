import React, { useEffect } from 'react'
import icons from '../../ultils/icon'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { apiZaloPay } from '../../services/ZaloPay'
import { useDispatch } from 'react-redux'
import { updateBookingSuccess } from '../../store/actions'


const { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, GoDotFill, FaCheck, RxAvatar } = icons



const BookingV3 = () => {
    const navigate = useNavigate()
    const { booking_id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateBookingSuccess(booking_id))
    }, [])


    const goHome = () => {
        navigate('/')
    }
    return (
        <div className='bg-[#F7F9FA] w-full flex flex-col items-center'>
            <div className='bg-[#FFFFFF] w-full h-[58px]  flex items-center justify-around'>
                <img src='https://gcs.tripi.vn/public-tripi/tripi-feed/img/475201KCm/anh-mo-ta.png'
                    className='w-[108px] h-[58px] object-cover cursor-pointer'
                    onClick={goHome}
                />
                <div className='flex gap-3'>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber1 size={20} />
                        <span>Đặt</span>
                    </div>
                    <span >----- </span>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber2 size={20} />
                        <span>Thanh toán</span>
                    </div>
                    <span >----- </span>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber3 size={20} color='blue' />
                        <span>Gửi phiếu xác nhận</span>
                    </div>
                </div>
            </div>
            <div className='bg-red-400 w-full flex items-center justify-center'>
                <img
                    src='https://ttgdtxphuquoc.edu.vn/hinh-anh-cam-on-de-thuong/imager_41_22398_700.jpg'
                    className='object-cover w-[500px] h-[400px] mt-4'
                    alt='Animated Thank You GIF'
                    autoPlay  // Sử dụng autoPlay để phát lại GIF tự động
                />
            </div>
            <div className='w-2/5 mt-10 flex text-center border border-blue-900 p-2 bg-blue-200 rounded-lg '>
                <span className='font-bold text-xl text-orange-600'>Cảm ơn bạn đã đặt phòng bên chúng tôi. Mọi thông tin phản hồi vui lòng liên hệ số điện thoại 023456789</span>
            </div>
        </div>
    )
}

export default BookingV3
