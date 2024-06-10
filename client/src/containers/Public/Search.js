import React, { useState } from 'react';
import { DatePicked, SearchOfPeople } from '../../components';
import icons from '../../ultils/icon';
import SearchByName from '../../components/SearchByName';
import { searchHomesByName } from '../../services/Home';
import { useNavigate } from 'react-router-dom';
import { formatVietNameseToSring } from '../../ultils/common/formatVietNameseToSring';

const { CiSearch, IoPeopleOutline, LuCalendarSearch } = icons;

const Search = () => {
    const navigate = useNavigate()
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(tomorrow);
    const [rooms, setRooms] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [searchByName, setSearchByName] = useState('');
    const [idHomes, setIdHomes] = useState('')

    const handleSearchHotel = async () => {

        console.log("Searching for:", searchByName);
        console.log("startDate :", startDate);
        console.log("endDate: ", endDate)
        console.log("people: ", adults, children, rooms)
        console.log("Id hotel: ", idHomes)
        navigate(`chi-tiet/${formatVietNameseToSring(searchByName)}/${idHomes}`, {
            state: {
                startDate1: startDate,
                endDate1: endDate,
                adults1: adults,
                children1: children,
                rooms1: rooms
            }
        })

        // Thêm logic tìm kiếm khách sạn ở đây
    };

    return (
        <div className='w-full relative'>
            <img src='https://cdn6.agoda.net/images/MVC/default/background_image/illustrations/bg-agoda-homepage.png'
                alt="logo"
                className='w-full h-[320px] object-cover'
            />

            <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-2xl font-bold">RONG CHƠI BỐN PHƯƠNG, GIÁ VẪN "YÊU THƯƠNG"</h1>
                <p className="text-lg">Tìm kiếm và đặt phòng khách sạn dễ dàng</p>
            </div>

            <div className='bg-gray-200 flex flex-col pt-10 gap-10 absolute top-[50%] left-[18%] w-[1020px] shadow-xl rounded-3xl py-5 px-10'>
                <SearchByName search={searchByName} setSearch={setSearchByName} setIdHome={setIdHomes} />
                <div className='w-full h-full flex justify-around gap-8 pb-10'>
                    <div className='w-[476.8px]'>
                        <DatePicked
                            startDate={startDate}
                            endDate={endDate}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        />
                    </div>
                    <div className='w-1/2'>
                        <SearchOfPeople rooms={rooms} setRooms={setRooms}
                            adults={adults} setAdults={setAdults}
                            children={children} setChildren={setChildren}
                        />
                    </div>
                </div>
            </div>
            <button onClick={handleSearchHotel} className='bg-blue-500 shadow-md rounded-lg hover:bg-blue-300 absolute top-[125%] left-[52%] transform -translate-x-1/2 -translate-y-1/2 w-[490px] h-[64px]'>
                <span className='text-white text-2xl font-semibold'>TÌM</span>
            </button>
        </div>
    );
};

export default Search;
