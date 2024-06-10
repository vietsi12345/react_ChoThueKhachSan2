import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import ListRoomEmpty from './ListRoomEmpty'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions'
import { apiGetTypeRoom } from '../services/Room';

const tooltipCircleStyle = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15px',
    height: '15px',
    border: '1px solid blue',
    borderRadius: '50%',
    color: 'white',
    fontSize: '12px',
    cursor: 'pointer',
    // position: 'relative',
    top: '-1px',
};

const RoomOfHome = ({ name, id, startDate, endDate, children, adults }) => {

    const [checkedValues, setCheckedValues] = useState([]) // mảng lưu id của các checkbox nếu được chọn
    const dispatch = useDispatch()
    // const { typeRoom } = useSelector(state => state.room)
    const [typeRoom, setTypeRoom] = useState(null);

    // useEffect(() => {
    //     dispatch(actions.getTypeRoom(id));
    // }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiGetTypeRoom(id);
                setTypeRoom(response.data); // Lưu dữ liệu vào state typeRoom
            } catch (error) {
                console.error("Failed to fetch room type:", error);
            }
        };

        fetchData();
    }, [id]); // đảm bảo bao gồm 'id' trong mảng dependency nếu nó thay đổi

    const handleCheckboxChang = async (e) => {   // sự kiện onclick xử lí thằng nào được chọn thì thêm id vào 
        const { id, checked } = e.target;
        if (checked) {
            setCheckedValues([...checkedValues, id])
        }
        else {
            setCheckedValues(checkedValues.filter(value => value !== id));
        }
    }
    return (
        <div id='phong' className='w-[1100px] pt-6 flex flex-col gap-4'>
            <span className='font-semibold text-2xl'>{`Những phòng còn trống tại ${name}`}</span>
            <div className='bg-[#255C9F] h-[64px] rounded-lg flex items-center gap-3 p-5'>
                <img
                    src='https://ik.imagekit.io/tvlk/image/imageResource/2020/04/14/1586844222168-9f81c6c60bcffcde668cf46de941aa3c.png?tr=q-75'
                    alt='logo'
                    className='w-[40px] h-[40px]'
                />
                <p className='text-white'>Phải đặt phòng trong thời điểm không chắc chắn này? Hãy chọn phòng có thể hủy miễn phí!</p>
            </div>
            <div className='border border-gray-300 p-5'>
                <span className='font-semibold text-lg'>Tìm kiếm nhanh hơn bằng cách chọn những tiện nghi bạn cần</span>
                <div className='mt-4 flex flex-wrap gap-20'>
                    <div className='flex items-center gap-2'>
                        <input onChange={handleCheckboxChang} type='checkbox' id='free-cancellation' className='size-4' />
                        <label htmlFor='free-cancellation'>Miễn phí hủy phòng</label>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input onChange={handleCheckboxChang} type='checkbox' id='pay-at-hotel' className='size-4' />
                        <label htmlFor='pay-at-hotel'>Thanh Toán Tại Khách Sạn</label>
                        <span
                            data-tooltip-id="tooltip"
                            data-tooltip-content="Cho chuyến đi thêm linh hoạt: KHÔNG CẦN THANH TOÁN NGAY khi đặt phòng! Bạn có đặt ngay phòng có giá tốt nhất hôm nay và thanh toán sau bằng tiền mặt hoặc thẻ khi nhận phòng."
                            style={tooltipCircleStyle}
                            className='bg-blue-500'
                        >?</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input onChange={handleCheckboxChang} type='checkbox' id='large-bed' className='size-4' />
                        <label htmlFor='large-bed'>Giường lớn</label>
                        <span
                            data-tooltip-id="tooltip"
                            data-tooltip-content="Giường lớn có thể bao gồm giường đôi/king/queen/. Phù hợp cho 2 người lớn."
                            style={tooltipCircleStyle}
                            className='bg-blue-500 '
                        >?</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <input onChange={handleCheckboxChang} type='checkbox' id='free-breakfast' className='size-4' />
                        <label htmlFor='free-breakfast'>Miễn phí bữa sáng</label>
                    </div>
                </div>
            </div>
            <Tooltip id="tooltip" place="top" type="dark" effect="float" style={{ width: '200px' }} />
            {typeRoom?.map((item) => {
                // console.log('roomofroom', item)
                return (
                    <ListRoomEmpty nameType={item} key={item} id={id} nameHotel={name}
                        startDate={startDate} endDate={endDate}
                        adults={adults}
                        children={children}
                    />
                )
            })}
        </div>
    );
};

export default RoomOfHome;
