import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import icons from '../../ultils/icon'
import { path } from '../../ultils/constain'


const { GiSelfLove, FaMoneyBill,
    RxAvatar,
    IoMenuOutline, FaUserPlus } = icons



const Header = () => {
    const navigate = useNavigate()
    const goLogin = () => {
        navigate(path.LOGIN);
    };

    const goRegister = () => {
        navigate(path.REGISTER);
    };


    return (
        <div className=' border-b border-gray-300 px-4 flex items-center justify-between  w-1020 h-[56px]'>
            <Link to={'/'}>
                <img src='https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg'
                    alt="logo"
                    className='w-[114px] h-[42px] object-contain'
                />
            </Link>
            <div className='flex gap-3 h-full hover:cursor-pointer'>
                <div className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                    <GiSelfLove size='21' />
                    <span className='font-semibold text-base'>Yêu thích </span>
                </div>
                <div className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                    <FaMoneyBill size='21' />
                    <div className='font-semibold text-base'>VNĐ</div>
                </div>
                <div onClick={goLogin} className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                    <RxAvatar size='21' />
                    <div className='font-semibold text-base'>Đăng nhập</div>
                </div>
                <div onClick={goRegister} className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                    <FaUserPlus size='21' />
                    <div className='font-semibold text-base'>Tạo tài khoản</div>
                </div>
                <div className='flex gap-2 hover:bg-gray-300 h-full justify-center items-center px-2'>
                    <IoMenuOutline size='21' />
                    <div className='font-semibold text-base'>Menu</div>
                </div>

            </div>
        </div >
    )
}

export default memo(Header)
