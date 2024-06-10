import actionType from "../actions/actionType";

const initstate = {
    dataPostNew: [],
    myBookings: [],
    msg: '',
};

const bookingReducer = (state = initstate, action) => {
    switch (action.type) {
        case actionType.POST_CREATENEWBOOKING:
            return {
                ...state,
                dataPostNew: action.data || [],
                msg: action.msg || '',
            };
        case actionType.GET_MYBOOKINGSBYEMAIL:
            return {
                ...state,
                myBookings: action.data || [],
                msg: action.msg || '',
            };
        case actionType.GET_CANCELBOOKING:
            console.log('data', action.data);
            console.log('msg', action.data.message);
            return {
                ...state,
                msg: action.data?.message || action.msg || '',
                myBookings: state.myBookings.map((item) =>
                    item.bookingId === action.data?.bookedRoom?.bookingId ? action.data.bookedRoom : item
                ),
            };
        default:
            return state;
    }
};

export default bookingReducer;
