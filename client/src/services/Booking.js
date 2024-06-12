import axiosConfig from '../axiosConfig';
import axios from 'axios';

export const apiNewCreateBooking = ({ checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId }) => new Promise(async (resolve, reject) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/booking/book',
            data: {
                checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId
            },
            headers: {
                'Content-Type': 'application/json', // Đảm bảo server của bạn có thể xử lý JSON
                // 'Authorization': 'Bearer your_token_here' // Nếu yêu cầu xác thực, thay thế 'your_token_here' bằng token thực tế
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetBookingsByEmail = (guestEmail) => new Promise(async (resolve, reject) => {
    try {
        // Tạo một đối tượng URLSearchParams và thêm keyword vào đó
        const params = new URLSearchParams();
        params.append('guestEmail', guestEmail);

        // Gửi yêu cầu GET với chuỗi truy vấn
        const response = await axiosConfig({
            method: 'get',
            url: `/api/booking/get-by-email?${params.toString()}`
        });

        resolve(response);
    } catch (error) {
        reject(error);
    }
});

export const apiBooKingSuccess = (code) => new Promise(async (resolve, reject) => {
    try {
        const formData = new FormData();
        formData.append('code', code);

        const response = await axiosConfig({
            method: 'put',
            url: `/api/booking/success-booking-code`,
            data: formData, // Truyền formData vào phần data
            headers: {
                'Content-Type': 'multipart/form-data', // Đặt Content-Type là 'multipart/form-data'
            },
        });

        resolve(response);
    } catch (error) {
        reject(error);
    }
});

export const apiCancelBooking = (bookingId) => new Promise(async (resolve, reject) => {
    try {


        const response = await axiosConfig({
            method: 'put',
            url: `/api/booking/cancel-booking-room/${bookingId}`,
        });

        resolve(response);
    } catch (error) {
        reject(error);
    }
});


export const apiGetAllBooking = () => new Promise(async (resolve, reject) => {
    try {

        const response = await axiosConfig({
            method: 'get',
            url: `/api/booking/all`
        });

        resolve(response);
    } catch (error) {
        reject(error);
    }
});

export const apiUpdateBookingStatus = ({ jwt, status, idBooking }) => new Promise(async (resolve, reject) => {
    try {

        const response = await axiosConfig({
            method: 'put',
            url: `/api/booking/admin/update-status/${idBooking}?status=${status}`,
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        resolve(response);
    } catch (error) {
        reject(error);
    }
});

export const apiStatistic = ({ jwt, dateStart, dateEnd }) => new Promise(async (resolve, reject) => {
    console.log(dateEnd, dateStart)
    try {

        const response = await axiosConfig({
            method: 'get',
            url: `/api/booking/admin/statistic?dateStart=${dateStart}&dateEnd=${dateEnd}`,
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });

        resolve(response);
    } catch (error) {
        reject(error);
    }
});
