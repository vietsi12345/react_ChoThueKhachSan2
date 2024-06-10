import React, { useEffect, useState } from 'react';
import { formatMonneyVietNam } from '../ultils/common/formatMonneyVietNam';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions';
import { apiGetRoomById } from '../services/Room';
import { apiGetHotelByID } from '../services/Home';
import { formatVietNameseToSring } from '../ultils/common/formatVietNameseToSring';
import { useNavigate } from 'react-router-dom';
import { FaMugSaucer } from 'react-icons/fa6';

const MybookingsItem = ({ item }) => {
    const [room, setRoom] = useState(null);
    const [hotel, setHotel] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { msg, myBookings } = useSelector(state => state.booking);

    useEffect(() => {
        const fetchRoom = async () => {
            const response = await apiGetRoomById(item.roomId);
            setRoom(response.data);
        };

        const fetchHotel = async () => {
            const response = await apiGetHotelByID(item.hotelId);
            setHotel(response.data);
        };

        fetchRoom();
        fetchHotel();
    }, [item.roomId, item.hotelId]);

    // useEffect(() => {
    //     // if (msg) {
    //     //     alert(msg);
    //     // }
    //     console.log(1)
    // }, [msg]);

    const handleGoBookingV2 = () => {
        navigate(`/booking/v2/${formatVietNameseToSring(hotel.name)}/${item.hotelId}/${formatVietNameseToSring(room.roomType)}/${item.roomId}`, {
            state: {
                nameHotel: hotel.name,
                roomType: room.roomType,
                total: room?.roomPrice + Math.round(+room?.roomPrice * 1 / 100),
                name: 'Nguyễn Viết Sĩ',
                phone: '034728742',
                email: 'nguyenvietsi12@gmail.com',
                idHotel: item.hotelId,
                idRoom: item.roomId,
                startDate: item?.checkInDate,
                endDate: item?.checkOutDate,
                adults: item.numOfAdults,
                children: item.numOfChildren,
                bookingConfirmationCode: item.bookingConfirmationCode
            }
        });
    };

    const handleCancelBooking = () => {
        dispatch(actions.cancelBooking(item.bookingId));
        if (msg) {
            alert(msg);
        }
    };

    return (
        <div className='border border-gray-200 rounded-xl bg-white shadow-lg px-5 pb-5 flex flex-col pt-3'>
            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-7 w-2/3 '>
                    <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg' alt="hotel" />
                    <div>
                        <h1 className='font-bold text-lg'>{hotel?.name}</h1>
                        <div className='flex items-center gap-12'>
                            <p className='text-gray-800 text-sm'>{`Mã đặt chỗ: ${item?.bookingConfirmationCode}`}</p>
                            <p className='text-gray-800 text-sm'>{`Trạng thái: ${item?.bookingStatus}`}</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-6 w-1/3'>
                    <button className={`px-2 py-1 rounded-lg text-white 
                        ${item.bookingStatus === 'Chưa thanh toán' ? 'bg-blue-600 hover:bg-blue-400' : 'bg-gray-400'}`}
                        onClick={handleGoBookingV2}
                    >
                        Thanh toán
                    </button>
                    <button onClick={handleCancelBooking}
                        className={`px-2 py-1 rounded-lg text-white 
                            ${item.bookingStatus === 'Chưa thanh toán' ? 'bg-orange-600 hover:bg-orange-400' : 'bg-gray-400'}`}
                    >
                        Hủy phòng
                    </button>
                </div>
            </div>
            <div className='flex items-center gap-[72px]'>
                <div className='pt-2 w-2/3'>
                    <p className='font-semibold text-center'>Thông tin phòng</p>
                    <div className='w-full flex gap-5'>
                        <div className='flex flex-col gap-1 w-1/2'>
                            <p className='text-base text-gray-700'>{`Loại phòng: ${room?.roomType}`}</p>
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
                <img src={room?.photo ? `data:image/png;base64,${room?.photo}` : null}
                    className='w-[100px] h-[100px] object-cover rounded-lg' alt="room"
                />
            </div>
        </div>
    );
};

export default MybookingsItem;
