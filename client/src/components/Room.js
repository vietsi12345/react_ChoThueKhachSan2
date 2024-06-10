import React from 'react'
import icons from '../ultils/icon'
import { formatMonneyVietNam } from '../ultils/common/formatMonneyVietNam'
import { useNavigate } from 'react-router-dom'
import { formatVietNameseToSring } from '../ultils/common/formatVietNameseToSring'

const { IoBedOutline, IoPeopleOutline } = icons

const Room = ({ nameType, price, nameHotel, idHotel, idRoom, startDate, endDate, adults, children, quantity }) => {
    const navigate = useNavigate()

    const handleGoBooking = () => {
        navigate(`/booking/${formatVietNameseToSring(nameHotel)}/${idHotel}/${formatVietNameseToSring(nameType)}/${idRoom}`, {
            state: {
                startDate,
                endDate,
                adults,
                children
            }
        })
    }

    return (
        <div className='flex'>
            <div className='w-[310px] border border-gray-300 p-2 flex flex-col'>
                <span className='text-sm text-gray-700'>{nameType}</span>
                <span className='font-semibold mt-2 text-base'>Không gồm bữa sáng</span>
                <span className='text-sm text-gray-700'>Không hoàn tiền</span>
                <div className='flex items-center gap-1 mb-7'>
                    <IoBedOutline />
                    <span className='text-sm text-gray-700'>1 Giường Đôi Hoặc 2 Giường Đơn</span>
                </div>
            </div>
            <div className='w-[80px] border border-gray-300 p-2 flex justify-center pt-8 '>
                <IoPeopleOutline size={24} />
            </div>
            <div className='w-[178px] border border-gray-300 p-2 flex flex-col items-end gap-1'>
                <div className='text-xs bg-[#BAF075] p-1 mt-3 text-green-900 font-semibold rounded-md w-fit'>SALE ĐÔNG NAM Á</div>
                <p className='font-semibold text-orange-600'>{formatMonneyVietNam(price)}</p>
                <span className='text-sm text-gray-700'>{`Còn : ${quantity} phòng`}</span>
            </div>

            <div className='w-[136px] border border-gray-300 p-2  '>
                <div className='text-base bg-orange-600 p-2 mt-9 text-white font-semibold rounded-md text-center cursor-pointer hover:bg-orange-400'
                    onClick={handleGoBooking}
                >
                    Chọn
                </div>
            </div>
        </div>
    )
}

export default Room
