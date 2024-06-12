import actionType from "../actions/actionType";

const initstate = {
    roomsByIdHotel: [],
    roomsByIdHotelAdmin: [],
    msg: '',
    typeRoom: [],
    roomById: [],
}

export const roomReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionType.GET_ROOMSBYIDHOTEL:
            return {
                ...state,
                roomsByIdHotel: action.roomsByIdHotel || [],
                msg: action.msg || [],
            }
        case actionType.GET_TYPEROOMS:
            return {
                ...state,
                typeRoom: action.typeRooms || [],
                msg: action.msg || [],
            }
        case actionType.GET_ROOMBYID:
            return {
                ...state,
                roomById: action.roomById || [],
                msg: action.msg || [],
            }
        case actionType.GET_ROOMSBYIDHOTEL_ADMIN:
            return {
                ...state,
                roomsByIdHotelAdmin: action.data || [],
                msg: action.msg || [],
            }
        case actionType.CREATE_ROOM:
            return {
                ...state,
                roomsByIdHotelAdmin: [...state.roomsByIdHotelAdmin, action.data],
                msg: action.msg || [],
            }
        case actionType.DELETE_ROOM:
            console.log(action.data)
            return {
                ...state,
                roomsByIdHotelAdmin: state.roomsByIdHotelAdmin.filter((item) => item.id !== action.data),
                msg: action.msg || [],
            }
        case actionType.UPDATE_ROOM:
            console.log('reducer', action.data)
            return {
                ...state,
                roomsByIdHotelAdmin: state.roomsByIdHotelAdmin.map((item) => item.id === action.data.id ? action.data : item),
                msg: action.msg || [],
            }
        default:
            return state;
    }
}