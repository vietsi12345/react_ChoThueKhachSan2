import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Profiles = () => {
    const navigate = useNavigate()

    const goMyProfiles = () => {
        navigate("/profiles/my-profiles")
    }

    const goMyBookings = () => {
        navigate("/profiles/my-booking")
    }

    return (
        <div className='w-1020 flex m-10'>
            <div className='w-1/4 border rounded-xl  h-[300px] bg-white  border-gray-300 p-4 pt-7'>
                <div className="flex items-center  ">
                    <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center">
                        {'Nguyễn Viết Sĩ'.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-3">
                        <p className="font-semibold text-gray-900">{'Nguyễn Viết Sĩ'}</p>
                        <p className="text-sm text-gray-500">{'nguyenvietsi12@gmail.com'}</p>
                    </div >
                </div>
                <hr className="my-4 border-gray-300" />
                <div className='flex flex-col gap-3 px-5'>
                    <div onClick={goMyBookings} className='flex items-center gap-2 cursor-pointer'>
                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8c9954122d8006592fbcbd4a82ac994c.svg' />
                        <span>Đặt chỗ của tôi</span>
                    </div>
                    <div onClick={goMyProfiles} className='flex items-center cursor-pointer gap-2 '>
                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f1e5ba7cea40df07a49fbd2cadb81dd0.svg' />
                        <span>Tài khoản</span>
                    </div>
                    <div className='flex items-center cursor-pointer gap-2 '>
                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/336593031502efcd0f97e6b35e7703a1.svg' />
                        <span>Đăng xuất</span>
                    </div>
                </div>
            </div>
            <div className='w-3/4'>
                <Outlet />
            </div>
        </div>
    )
}

export default Profiles
