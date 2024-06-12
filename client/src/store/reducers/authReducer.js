import actionType from "../actions/actionType";

const initstate = {
    jwt: null,
    user: null,
    allUser: [],
    msg: '',
}

const authReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionType.SIGN_UP:
            return {
                ...state,
                jwt: action.data || [],
                msg: action.msg || '',
            };
        case actionType.SIGN_IN:
            return {
                ...state,
                jwt: action.data || [],
                msg: action.msg || '',
            };
        case actionType.GET_USER_BYTOKEN:
            return {
                ...state,
                user: action.data,
                msg: action.msg || '',
            };
        case actionType.GET_ALL_USER:
            return {
                ...state,
                allUser: action.data,
                msg: action.msg || '',
            };
        case actionType.LOGOUT:
            return initstate
        default:
            return state;
    }
}

export default authReducer