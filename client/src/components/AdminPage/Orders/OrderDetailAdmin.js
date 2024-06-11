import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions'

import { useNavigate } from 'react-router-dom';
import { formatMonneyVietNam } from '../../../ultils/common/formatMonneyVietNam';
import { apiGetRoomById } from '../../../services/Room';
import { apiGetHotelByID } from '../../../services/Home';


const OrderDetailAdmin = ({ item }) => {
  const [room, setRoom] = useState(null);
  const [hotel, setHotel] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { hotelByID } = useSelector(state => state.home);
  const { roomById } = useSelector(state => state.room);

  useEffect(() => {
    dispatch(actions.getRoomById(item.roomId))
    dispatch(actions.getHotelByID(item.hotelId))
  }, []);




  return (
    <div className='border border-gray-200 rounded-xl bg-white shadow-lg px-5 pb-5 flex flex-col pt-3'>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-7 w-2/3 '>
          <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg' alt="hotel" />
          <div>
            <h1 className='font-bold text-lg'>{hotelByID?.name}</h1>
            <div className='flex items-center gap-12'>
              <p className='text-gray-800 text-sm'>{`Mã đặt chỗ: ${item?.bookingConfirmationCode}`}</p>
              <p className='text-gray-800 text-sm'>{`Trạng thái: ${item?.bookingStatus}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='pt-2'>
          <p className='font-semibold text-center'>Thông tin phòng</p>
          <div className=' flex gap-5  w-[500px]'>
            <div className='flex flex-col gap-1 w-1/2'>
              <p className='text-base text-gray-700'>{`Loại phòng: ${roomById?.roomType}`}</p>
              <p className='text-base text-gray-700'>{`Khách: ${item.numOfAdults} người lớn, ${item.numOfChildren} trẻ em`}</p>
              <p className='text-base text-gray-700'>{`Ngày nhận phòng: ${item?.checkInDate}`}</p>
            </div>
            <div className='flex flex-col gap-1 w-1/2'>
              <p className='text-base text-gray-700'>{`ID phòng:  ${item?.roomId}`}</p>
              <p className='text-base text-gray-700'>{`Tổng tiền: ${formatMonneyVietNam(item?.totalPrice)}`}</p>
              <p className='text-base text-gray-700'>{`Ngày trả phòng: ${item?.checkOutDate}`}</p>
            </div>
          </div>
        </div>
        <img src={roomById?.photo ? `data:image/png;base64,${roomById?.photo}` : null}
          className='w-[100px] h-[100px] object-cover rounded-lg' alt="room"
        />
      </div>
    </div>
  );
};

export default OrderDetailAdmin;
