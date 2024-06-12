import React, { useEffect, useState } from 'react'
import icons from '../../ultils/icon'
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { formatVietNameseToSring } from '../../ultils/common/formatVietNameseToSring';
import { formatMonneyVietNam } from '../../ultils/common/formatMonneyVietNam';
import * as actions from '../../store/actions'
import { GiPodiumSecond } from 'react-icons/gi';
import { format } from 'date-fns';

const { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3, CiClock2, IoIosCloseCircle } = icons

const Booking = () => {
    const { user } = useSelector(state => state.auth)
    const [selectedOption, setSelectedOption] = useState('isMe');
    const [isShowNoMe, setIsShowNoMe] = useState(false)
    const [isShowAcpectPayment, setIsShowAcpectPayment] = useState(false)
    const [name, setName] = useState(user?.fullName || '')
    const [email, setEmail] = useState(user?.email || '')
    const [phone, setPhone] = useState('')
    const [nameNoME, setNameNoME] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [errorNameNoMe, setErrorNameNoMe] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const { startDate, endDate, adults, children } = location.state || {}


    const { hotelByID } = useSelector(state => state.home)
    const { roomById } = useSelector(state => state.room)

    const arrLocation = location.pathname.split('/')
    const nameHotel = arrLocation[2]
    const idHotel = arrLocation[3]
    const nameType = arrLocation[4]
    const idRoom = arrLocation[5]


    const handleChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        if (value === 'isNoMe') {
            setIsShowNoMe(true);
        } else {
            setIsShowNoMe(false);
        }
    };

    const hanldeClickBtnThanhToan = () => {
        let checkValidAll = true;

        if (!name) {
            setErrorName('Vui lòng điền đầy đủ họ và tên')
            checkValidAll = false
        } else setErrorName('')
        if (!email) {
            setErrorEmail('Vui lòng điền đầy đủ thông tin email')
            checkValidAll = false
        } else setErrorEmail('')
        if (!phone) {
            setErrorPhone('Vui lòng điền thông tin số điên thoại liên hệ')
            checkValidAll = false
        } else setErrorPhone('')
        if (isShowNoMe) {
            if (!nameNoME) {
                setErrorNameNoMe('Vui lòng điền đầy đủ họ và tên khách')
                checkValidAll = false
            } else setErrorNameNoMe('')
        }
        if (checkValidAll) {
            setIsShowAcpectPayment(true)
        }
    }

    const handleClickBtnThayDoi = (e) => {
        e.stopPropagation()
        setIsShowAcpectPayment(false)
    }

    const goHome = () => {
        navigate('/')
    }

    const formatDateString = (date) => {
        return format(date, "EEEE, dd-MM-yyyy")
    }

    const formatDateStringSend = (date) => {   // CHUYỂN định dạng ngày từ giờ đông dương = > 02-03-2024
        return format(date, 'yyyy-MM-dd');
    };

    const goBooKingV2 = () => {
        const bookingData = {
            checkInDate: formatDateStringSend(startDate),
            checkOutDate: formatDateStringSend(endDate),
            guestFullName: name,
            guestEmail: email,
            numOfAdults: adults,
            numOfChildren: children,
            note: "",
            totalPrice: roomById?.roomPrice + Math.round(+roomById?.roomPrice * 1 / 100),
            roomId: idRoom,
            hotelId: idHotel
        }
        dispatch(actions.postNewCreateBooking(bookingData))

        navigate(`/booking/v2/${formatVietNameseToSring(nameHotel)}/${idHotel}/${formatVietNameseToSring(nameType)}/${idRoom}`, {
            state: {
                nameHotel: hotelByID.name,
                roomType: roomById.roomType,
                total: roomById?.roomPrice + Math.round(+roomById?.roomPrice * 1 / 100),
                name: name,
                phone: phone,
                email: email,
                idHotel: idHotel,
                idRoom: idRoom,
                startDate,
                endDate,
                adults,
                children
            }
        })
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(actions.getHotelByID(idHotel))
        dispatch(actions.getRoomById(idRoom))
    }, [])


    return (
        <div className='bg-[#F7F9FA] w-full '>
            <div className='bg-[#FFFFFF] w-full h-[58px]  flex items-center justify-around'>
                <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/97f3e7a54e9c6987283b78e016664776.svg'
                    className='w-[108px] h-[34,4px] object-contain cursor-pointer'
                    onClick={goHome}
                />
                <div className='flex gap-3'>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber1 size={20} color='blue' />
                        <span>Đặt</span>
                    </div>
                    <span >----- </span>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber2 size={20} />
                        <span>Thanh toán</span>
                    </div>
                    <span >----- </span>
                    <div className='flex items-center gap-2'>
                        <TbCircleNumber3 size={20} />
                        <span>Gửi phiếu xác nhận</span>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center mt-10'>
                <div className='w-[1080px] '>
                    <div className='p-4 flex flex-col gap-5'>
                        <h1 className='text-2xl font-semibold'>Đặt phòng của bạn</h1>
                        <span className='text-base text-gray-600'>Hãy đảm bảo tất cả thông tin chi tiết trên trang này đã chính xác trước khi tiến hành thanh toán.</span>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-3/5 flex flex-col gap-6'>
                            <div className='flex gap-2 items-center bg-white rounded-lg p-2'>
                                <img src='https://ik.imagekit.io/tvlk/image/imageResource/2023/11/01/1698829542551-90fc7f7a6017f1edae48bde77fd42cd4.svg?tr=h-67,q-75,w-56'
                                    className='w-[56px] h-[57px]'
                                />
                                <div className='text-sm w-4/5'>Nhận ưu đãi độc quyền và tận hưởng nhiều lợi ích hơn khi bạn đăng nhập.</div>
                                <span className='text-blue-600 font-semibold text-sm text-center cursor-pointer'>Đăng nhập hoặc đăng ký</span>
                            </div>
                            <div className='bg-white rounded-lg p-4 pt-7 flex flex-col gap-2'>
                                <h3 className='font-semibold text-xl'>Thông tin liên hệ (Đối với E-Voucher)</h3>
                                <span className='text-sm text-gray-500'>Hãy điền chính xác tất cả thông tin để đảm bảo bạn nhận được Phiếu xác nhận  đặt phòng (E-voucher) qua email của mình.</span>
                                <div className='mt-7 flex flex-col gap-2'>
                                    <span>Họ và tên</span>
                                    <input
                                        type='email'
                                        className="outline-none border border-gray-300 p-2 rounded-md w-full"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {errorName && <div className='text-red-500 text-sm'>{errorName}</div>}
                                </div>
                                <div className='flex gap-3'>
                                    <div className='mt-7 flex flex-col gap-2 w-3/5'>
                                        <span>Email</span>
                                        <input
                                            type='email'
                                            className="outline-none border border-gray-300 p-2 rounded-md w-full"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {errorEmail && <div className='text-red-500 text-sm'>{errorEmail}</div>}
                                        <span className='text-sm text-gray-500'>Chúng tôi sẽ gửi e-voucher tới email này.</span>
                                    </div>
                                    <div className='mt-7 flex flex-col gap-2 w-2/5'>
                                        <span>Số điện thoại</span>
                                        <input
                                            type='phone'
                                            className="outline-none border border-gray-300 p-2 rounded-md w-full"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        {errorPhone && <div className='text-red-500 text-sm'>{errorPhone}</div>}
                                        <span className='text-sm text-gray-500'>ví dụ. +62812345678 gồm Mã quốc gia (+62) và Số di động 0812345678.</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-10 pt-3'>
                                    <div className='flex gap-3 items-center'>
                                        <input
                                            type='radio'
                                            id='isMe'
                                            name='booking'
                                            value='isMe'
                                            checked={selectedOption === 'isMe'}
                                            onChange={handleChange}
                                            className='size-4'
                                        />
                                        <label htmlFor='isMe'>Tôi là khách lưu trú</label>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <input
                                            type='radio'
                                            id='isNoMe'
                                            name='booking'
                                            value='isNoMe'
                                            checked={selectedOption === 'isNoMe'}
                                            onChange={handleChange}
                                            className='size-4'
                                        />
                                        <label htmlFor='isNoMe'>Tôi đang đặt cho người khác</label>
                                    </div>
                                </div>
                                {isShowNoMe ? <div className='mt-7 flex flex-col gap-2 '>
                                    <span>Tên đầy đủ của khách</span>
                                    <input
                                        type='namenome'
                                        className="outline-none border border-gray-300 p-2 rounded-md w-full"
                                        value={nameNoME}
                                        onChange={(e) => setNameNoME(e.target.value)}
                                    />
                                    {errorNameNoMe && <div className='text-red-500 text-sm'>{errorNameNoMe}</div>}
                                    <span className='text-sm text-gray-500'>Nhập tên khách sẽ lưu trú.</span>
                                </div> : null}
                            </div>
                            <div className='bg-white p-5 rounded-lg flex flex-col gap-4'>
                                <h2 className='text-black font-semibold text-xl'>Chi tiết giá</h2>
                                <div className='flex justify-center gap-3'>
                                    <img src='https://ik.imagekit.io/tvlk/image/imageResource/2022/09/13/1663036323265-71c4f62650fd2a96cda8cd045e2ab935.webp?tr=h-16,q-75'
                                        className='w-[16px] h-[16px]'
                                    />
                                    <span className='text-sm text-blue-500 font-semibold'>Thuế và phí là các khoản được Traveloka chuyển trả cho khách sạn. Mọi thắc mắc về thuế và hóa đơn, vui lòng tham khảo Điều khoản và Điều kiện của Traveloka để được giải đáp</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span>Giá phòng</span>
                                    <span>{roomById.roomPrice && formatMonneyVietNam(roomById?.roomPrice)}</span>
                                </div>
                                <div className='flex justify-between border-b border-black pb-3'>
                                    <span>Thuế và phí</span>
                                    <span>{roomById.roomPrice && formatMonneyVietNam(+roomById?.roomPrice * 1 / 100)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='font-bold text-xl'>Tổng giá</span>
                                    <span className='font-bold text-xl text-orange-500'>{roomById.roomPrice && formatMonneyVietNam(roomById?.roomPrice + +roomById?.roomPrice * 1 / 100)}</span>
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                <CiClock2 size={20} color='blue' />
                                <span className='text-sm text-blue-600 font-semibold'>Hãy giữ phòng này ngay trước khi nó tăng cao hơn!</span>
                            </div>
                            <div className='p-5 bg-white rounded-lg flex flex-col gap-3'>
                                <button onClick={hanldeClickBtnThanhToan} className='bg-orange-500 text-white font-semibold text-lg p-3 rounded-lg hover:bg-orange-700'>Tiếp tục thanh toán</button>
                                <span className='text-sm text-center'>Bằng việc tiếp tục thanh toán, bạn đã đồng ý với Điều khoản & Điều kiện cũng như Chính sách quyền riêng tư của Traveloka.</span>
                            </div>
                        </div>
                        <div className='w-2/5  rounded-md flex flex-col gap-5'>
                            <div className=' rounded-md '>
                                <div className='flex items-center gap-3 p-4 justify-center bg-white rounded-md'>
                                    <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6aa2fd01a9460e1a71bb0efb713f0212.svg' />
                                    <div>
                                        <h3 className='font-semibold text-base'>{hotelByID.name}</h3>
                                        <span className='text-sm text-gray-500'>{hotelByID.name}</span>
                                    </div>
                                </div>
                                <div className='p-4 flex flex-col justify-center '>
                                    <div className='flex gap-5 px-4'>
                                        <span className='text-base text-gray-500'>Ngày nhận phòng: </span>
                                        <span className='text-base text-black'>{`${formatDateString(startDate)}`}</span>
                                    </div>
                                    <div className='flex gap-5 px-4'>
                                        <span className='text-base text-gray-500'>Ngày trả phòng: </span>
                                        <span className='text-base text-black'>{`${formatDateString(endDate)}`}</span>
                                    </div>
                                </div>
                                <div className='bg-white flex flex-col p-4 gap-3 rounded-md'>
                                    <img src={roomById?.photo ? `data:image/png;base64,${roomById?.photo}` : null}
                                        className='w-[375px] h-[180px] shadow-xl mx-3 object-cover'
                                    />
                                    <h3 className='font-semibold text-lg mt-3'>{roomById?.roomType}</h3>
                                    <div className='flex gap-3 items-center'>
                                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/377ee1b8105881b249bd015d717ccf4f.svg' />
                                        <span className='text-base text-gray-600'>{`${adults} người lớn, ${children} trẻ em`}</span>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/0/089ab79c91e595414ce6be5e7c98aa39.svg' />
                                        <span className='text-base text-gray-600'>Breakfast included for 1 pax</span>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bf6a43a380752458f8ff4bcf166ccd42.svg' />
                                        <span className='text-base text-gray-600'>1 Giường Đôi Và 1 Giường Đơn</span>
                                    </div>
                                    <div className='flex gap-3 items-center border-b border-gray-300 pb-3'>
                                        <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4f0f6df93a9354e95d086ef2f54fd33d.svg' />
                                        <span className='text-base text-gray-600'>Wifi free</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span className='font-semibold'>Tổng giá phòng</span>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-semibold text-orange-600'>{formatMonneyVietNam(roomById?.roomPrice + +roomById?.roomPrice * 1 / 100)}</span>
                                            <div className='flex '>
                                                <img src='https://ik.imagekit.io/tvlk/image/imageResource/2023/11/01/1698829441207-82213d07f4b2ba6faa56962a05138746.svg?tr=q-75'
                                                    className='w-[12px] h-[12px] object-cover'
                                                />
                                                <span className='text-sm text-green-500'>Giá tốt nhất</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 bg-white rounded-lg flex flex-col gap-5'>
                                <div className='flex gap-4'>
                                    <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/377593f86d55e9458089c177e9b5723a.svg' />
                                    <span className='font-semibold'> Chính sách hủy và đổi lịch</span>
                                </div>
                                <div className='text-sm px-3 bg-gray-100 rounded-md p-1'>
                                    Bạn có giá tốt nhất với phòng này!
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <IoIosCloseCircle color='gray' size={19} />
                                    <span className='font-semibold text-gray-500'> Chính sách hủy và đổi lịch.</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <IoIosCloseCircle color='gray' size={19} />
                                    <span className='font-semibold text-gray-500'> Non-reschedulable.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isShowAcpectPayment && <div onClick={() => setIsShowAcpectPayment(false)}
                className='fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] z-20 flex items-center justify-center'
            >
                <div onClick={(e) => {
                    e.stopPropagation()
                    setIsShowAcpectPayment(true)
                }}
                    className='bg-white w-1/3 rounded-md'
                >
                    <div className='flex p-3 gap-6'>
                        <img src='https://ik.imagekit.io/tvlk/image/imageResource/2017/07/24/1500886087756-48f7e3513ab4f1227fc7a1e568a6ddc8.png?tr=h-151,w-130'
                            className='w-[130px] h-[151px] object-cover'
                        />
                        <div className='flex flex-col gap-2'>
                            <img src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/289132fc2c4e238ca785875d50fa98f1.svg'
                                className='w-[124px] h-[28px] object-cover' />
                            <span>Tất cả thông tin bạn điền đã chính xác chưa?</span>
                            <span className='px-10'>{`Họ và tên: ${name}`}</span>
                            <span className='px-10'>{`Email: ${email}`}</span>
                            <span className='px-10'>{`Số di động: ${phone}`}</span>
                            {isShowNoMe && <span className='px-10'>{`Họ và tên khách: ${nameNoME}`}</span>}
                            <span>Vé điện tử/phiếu thanh toán sẽ được gửi qua email và tóm tắt đặt chỗ sẽ được gửi đến số di động của bạn.</span>
                        </div>
                    </div>
                    <div className='flex gap-2 p-2'>
                        <button onClick={handleClickBtnThayDoi}
                            className='bg-gray-100 p-1 rounded-lg text-blue-600 font-semibold w-1/2 hover:bg-gray-200'
                        >
                            Thay đổi</button>
                        <button className='bg-blue-600 p-1 rounded-lg text-white font-semibold w-1/2 hover:bg-blue-500'
                            onClick={goBooKingV2}
                        >
                            Thông tin đã chính xác
                        </button>
                    </div>
                </div>
            </div>}
        </div>

    )
}

export default Booking
