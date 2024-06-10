import actionType from "../actions/actionType";


const initstate = {
    homes: [],
    homesSearch: [],
    msg: '',
    cities: [],
    homesByCity: [],
    hotelByID: []
}
const homeReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionType.GET_ALLHOME:
            return {
                ...state,
                homes: action.homes || [],
                msg: action.msg || [],
            }
        case actionType.SEARCH_HOMES:
            return {
                ...state,
                homesSearch: action.homesSearch || [],
                msg: action.msg || [],
            }
        case actionType.GET_ALLCITIES:
            return {
                ...state,
                cities: action.cities || [],
                msg: action.msg || [],
            }
        case actionType.GET_HOMESBYCITYNAME:
            return {
                ...state,
                homesByCity: action.homesByCity || [],
                msg: action.msg || [],
            }
        case actionType.GET_HOTELBYID:
            return {
                ...state,
                hotelByID: action.hotelByID || [],
                msg: action.msg || [],
            }
        case actionType.POST_CREATEHOTEL:
            return {
                ...state,
                homes: [...state.homes, action.data],
                msg: action.msg || [],
            }
        case actionType.DELETE_HOTEL:
            return {
                ...state,
                homes: state.homes.filter((item) => item.id !== action.data),
                msg: action.msg || [],
            }
        case actionType.UPDATE_HOME:
            return {
                ...state,
                homes: state.homes.map((item) => item.id === action.data.id ? action.data : item),
                msg: action.msg || [],
            }
        default:
            return state;
    }
}


export default homeReducer