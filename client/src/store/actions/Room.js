import { apiCreateRoom, apiDeleteRoom, apiGetRoomById, apiGetRoomByIdHotel, apiGetRoomsByIdHotel, apiGetRoomsByIdHotelAndTypeRoom, apiGetTypeRoom, apiUpdateRoom } from "../../services/Room";
import actionType from "./actionType";

export const getRoomsByIdHotelAndTypeRoom = (idHotel, name) => async (dispatch) => {
    try {
        const response = await apiGetRoomsByIdHotelAndTypeRoom(idHotel, name)
        if (response.status === 200) {
            dispatch({
                type: actionType.GET_ROOMSBYIDHOTEL,
                roomsByIdHotel: response.data
            })
        } else {

            dispatch({
                type: actionType.GET_ROOMSBYIDHOTEL,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispatch({
            type: actionType.GET_ROOMSBYIDHOTEL,
            homes: null
        })
    }
}

export const getTypeRoom = (idHotel) => async (dispatch) => {
    try {
        const response = await apiGetTypeRoom(idHotel)
        if (response.status === 200) {
            dispatch({
                type: actionType.GET_TYPEROOMS,
                typeRooms: response.data
            })
        } else {

            dispatch({
                type: actionType.GET_TYPEROOMS,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispatch({
            type: actionType.GET_TYPEROOMS,
            typeRooms: null
        })
    }
}
export const getRoomById = (idRoom) => async (dispatch) => {
    try {
        const response = await apiGetRoomById(idRoom)
        if (response.status === 200) {
            dispatch({
                type: actionType.GET_ROOMBYID,
                roomById: response.data
            })
        } else {

            dispatch({
                type: actionType.GET_ROOMBYID,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispatch({
            type: actionType.GET_ROOMBYID,
            roomById: null
        })
    }
}

export const getRoomByIdHotel = (idHotel) => async (dispatch) => {
    try {
        const response = await apiGetRoomByIdHotel(idHotel)
        if (response.status === 200) {
            dispatch({
                type: actionType.GET_ROOMSBYIDHOTEL_ADMIN,
                data: response.data
            })
        } else {

            dispatch({
                type: actionType.GET_ROOMSBYIDHOTEL_ADMIN,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispatch({
            type: actionType.GET_ROOMSBYIDHOTEL_ADMIN,
            data: null
        })
    }
}

export const updateRoom = ({ idRoom, formData }) => async (dispatch) => {
    try {
        const response = await apiUpdateRoom({ idRoom, formData })
        console.log('response', response)
        if (response.status === 200) {
            dispatch({
                type: actionType.UPDATE_ROOM,
                data: response.data
            })
        } else {

            dispatch({
                type: actionType.UPDATE_ROOM,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispatch({
            type: actionType.UPDATE_ROOM,
            data: null
        })
    }
}

export const createRoom = (formData) => async (dispatch) => {
    try {
        const response = await apiCreateRoom(formData)
        if (response.status === 200) {
            dispatch({
                type: actionType.CREATE_ROOM,
                data: response.data
            })
        } else {

            dispatch({
                type: actionType.CREATE_ROOM,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispatch({
            type: actionType.CREATE_ROOM,
            data: null
        })
    }
}

export const deleteRoom = (idRoom) => async (dispatch) => {
    try {
        const response = await apiDeleteRoom(idRoom)
        console.log(response)
        if (response.status === 204) {
            dispatch({
                type: actionType.DELETE_ROOM,
                data: idRoom
            })
        } else {
            dispatch({
                type: actionType.DELETE_ROOM,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispatch({
            type: actionType.DELETE_ROOM,
            data: null
        })
    }
}


