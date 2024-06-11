export const path = {
    HOME: '/*',
    LOGIN: 'login',
    REGISTER: 'register',
    DETAIL__NAME__ID: 'chi-tiet/:name/:id',
    PROFILES: 'profiles/*',
    MYPROFILES: 'my-profiles',
    MYBOOKING: 'my-booking',
    BOOKING: '/booking/:nameHotel/:idhotel/:typeRoom/:idRoom',
    BOOKINGV2: '/booking/v2/:nameHotel/:idhotel/:typeRoom/:idRoom',
    BOOKINGV3: '/booking/v3/:nameHotel/:idhotel/:typeRoom/:idRoom/:booking_id',
    SYSTEM: '/admin/*',
    ADMIN: '/adminn/*'
}
export const location = [
    {
        id: 'hcm',
        name: 'Hồ Chí Minh',
        image: 'https://phongtro123.com/images/location_hcm.jpg'
    },
    {
        id: 'hn',
        name: 'Hà Nội',
        image: 'https://phongtro123.com/images/location_hn.jpg'
    },
    {
        id: 'dn',
        name: 'Đà Nẵng',
        image: 'https://phongtro123.com/images/location_dn.jpg'
    },
]