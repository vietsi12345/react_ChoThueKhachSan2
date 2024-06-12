import React, { useEffect, useState } from 'react';
import { ItemHome, NavbarDetail, SearchDetail, SearchOfPeople } from '../../components/';
import OverviewDetail from '../../components/OverviewDetail';
import RoomOfHome from '../../components/RoomOfHome';
import Utilities from './Utilities';
import Policies from './Policies';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/actions'
import { CiLight } from 'react-icons/ci';


const arrTestImg = [1, 2, 3, 4, 5, 6];



const DetailHome = () => {
    const dispath = useDispatch()
    const { hotelByID } = useSelector(state => state.home)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispath(actions.getHotelByID(id))
    }, []);
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const location = useLocation()
    const id = location.pathname.split('/').pop()
    const { startDate1, endDate1, adults1, children1, rooms1 } = location.state || {
        startDate1: today,
        endDate1: tomorrow,
        adults1: 1,
        children1: 0,
        rooms1: 1
    }

    // xử lì chọnn ngày trên thanh search


    const [startDate, setStartDate] = useState(startDate1);
    const [endDate, setEndDate] = useState(endDate1);
    const [rooms, setRooms] = useState(rooms1);
    const [adults, setAdults] = useState(adults1);
    const [children, setChildren] = useState(children1);



    return (

        <div className='w-full flex flex-col items-center gap-3 mb-10'>
            <SearchDetail nameHotel={hotelByID.name}
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                rooms={rooms} setRooms={setRooms}
                adults={adults} setAdults={setAdults}
                children={children} setChildren={setChildren}
            />
            <div className='w-[1100px] h-[288px] mt-5 flex gap-2'>
                {hotelByID?.photo ? (
                    <img
                        src={hotelByID?.photo ? `data:image/png;base64,${hotelByID.photo}` : null}
                        alt='anh1'
                        className='w-2/5 object-cover'
                    />
                ) : (
                    <div className='w-2/5 object-cover bg-gray-200 flex items-center justify-center'>
                        <span>No Image Available</span>
                    </div>
                )}
                <div className='w-3/5 flex flex-wrap gap-2'>
                    {arrTestImg.map((item, index) => (
                        <img
                            key={index}
                            src={hotelByID?.photo ? `data:image/png;base64,${hotelByID.photo}` : null}
                            alt='mang anh'
                            className='w-[210px] h-[140px] object-cover'
                        />
                    ))}
                </div>
            </div>
            <NavbarDetail price={hotelByID?.price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })} />
            <OverviewDetail name={hotelByID?.name} address={hotelByID?.address} description={hotelByID?.description} />
            <RoomOfHome name={hotelByID?.name} id={id}
                startDate={startDate} endDate={endDate}
                adults={adults}
                children={children}
            />
            <div id='kslq' className='rounded-xl w-[1100px]  bg-blue-100 p-5 pt-7 flex flex-col gap-1'>
                <h2 className='font-semibold text-lg'>Cơ sở lưu trú khác bạn có thể thích</h2>
                <h2 className=' text-sm'>Cơ sở lưu trú tương tự đã được khách chọn</h2>
                <div>
                    {/* <ItemHome /> */}
                </div>
            </div>
            <Utilities name={hotelByID?.name} />
            <Policies name={hotelByID?.name} />

        </div>
    );
};

export default DetailHome;
