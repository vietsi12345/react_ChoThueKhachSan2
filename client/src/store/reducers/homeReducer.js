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
        default:
            return state;
    }
}


export default homeReducer