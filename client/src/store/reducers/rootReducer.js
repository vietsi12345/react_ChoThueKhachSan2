import authReducer from "./authReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2"
import { persistReducer } from "redux-persist"
import homeReducer from "./homeReducer";
import { roomReducer } from "./roomReducer";
import bookingReducer from "./bookingReducer";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const authConfig = {
    ...commonConfig,
    key: "auth",
    whitelist: ['isLoggerIn', 'token']
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    // auth: authReducer,
    // user: userReducer,
    home: homeReducer,
    room: roomReducer,
    booking: bookingReducer
})

export default rootReducer