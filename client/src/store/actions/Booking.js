import { apiBooKingSuccess, apiCancelBooking, apiGetAllBooking, apiGetBookingsByEmail, apiNewCreateBooking, apiStatistic, apiUpdateBookingStatus } from "../../services/Booking";
import actionType from "./actionType";

export const postNewCreateBooking = ({ checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId }) => async (dispath) => {
    try {
        const response = await apiNewCreateBooking({ checkInDate, checkOutDate, guestFullName, guestEmail, numOfAdults, numOfChildren, note, totalPrice, roomId, hotelId })
        if (response.status === 200) {

            dispath({
                type: actionType.POST_CREATENEWBOOKING,
                data: response.data
            })
        } else {

            dispath({
                type: actionType.POST_CREATENEWBOOKING,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.POST_CREATENEWBOOKING,
            data: null
        })
    }
}
export const getMyBooking = (guestEmail) => async (dispath) => {
    try {
        const response = await apiGetBookingsByEmail(guestEmail)
        if (response.status === 200) {

            dispath({
                type: actionType.GET_MYBOOKINGSBYEMAIL,
                data: response.data
            })
        } else {

            dispath({
                type: actionType.GET_MYBOOKINGSBYEMAIL,
                msg: 'Lỗi'
            })
        }
    } catch (error) {
        dispath({
            type: actionType.GET_MYBOOKINGSBYEMAIL,
            data: null
        })
    }
}

export const updateBookingSuccess = (code) => async (dispath) => {
    try {
        const response = await apiBooKingSuccess(code)
        if (response.status === 200) {

            dispath({
                type: actionType.PUT_BOOKINGSUCCESS,
                data: response.data
            })
        } else {

            dispath({
                type: actionType.PUT_BOOKINGSUCCESS,
                msg: 'Lỗi'
            })
        }
    } catch (error) {
        dispath({
            type: actionType.PUT_BOOKINGSUCCESS,
            data: null
        })
    }
}

export const cancelBooking = (bookingId) => async (dispatch) => {
    try {
        const response = await apiCancelBooking(bookingId);
        console.log(response);
        if (response.status === 200) {
            dispatch({
                type: actionType.GET_CANCELBOOKING,
                data: response.data,
            });
            alert(response?.data?.message)
        } else {
            dispatch({
                type: actionType.GET_CANCELBOOKING,
                msg: 'Lỗi',
            });
        }
    } catch (error) {
        dispatch({
            type: actionType.GET_CANCELBOOKING,
            msg: 'Đã xảy ra lỗi khi hủy đặt phòng',
        });
    }
};

export const getAllBookings = () => async (dispath) => {
    try {
        const response = await apiGetAllBooking()
        if (response.status === 200) {

            dispath({
                type: actionType.GET_ALLBOOKING,
                data: response.data
            })
        } else {

            dispath({
                type: actionType.GET_ALLBOOKING,
                msg: 'Lỗi'
            })
        }
    } catch (error) {
        dispath({
            type: actionType.GET_ALLBOOKING,
            data: null
        })
    }
}

export const updateBookingStatus = ({ jwt, status, idBooking }) => async (dispath) => {
    try {
        const response = await apiUpdateBookingStatus({ jwt, status, idBooking })
        if (response.status === 200) {

            dispath({
                type: actionType.UPDATE_BOOKINGSTATUS,
                data: response.data
            })
        } else {

            dispath({
                type: actionType.UPDATE_BOOKINGSTATUS,
                msg: 'Lỗi'
            })
        }
    } catch (error) {
        dispath({
            type: actionType.UPDATE_BOOKINGSTATUS,
            data: null
        })
    }
}

export const getStatistic = ({ jwt, dateStart, dateEnd }) => async (dispath) => {
    try {
        const response = await apiStatistic({ jwt, dateStart, dateEnd })
        if (response.status === 200) {

            dispath({
                type: actionType.GET_STATISTIC,
                data: response.data
            })
        } else {

            dispath({
                type: actionType.GET_STATISTIC,
                msg: 'Lỗi'
            })
        }
    } catch (error) {
        dispath({
            type: actionType.GET_STATISTIC,
            data: null
        })
    }
}
