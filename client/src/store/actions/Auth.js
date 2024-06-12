import { apiGetAllUser, apiGetUser, apiSignIn, apiSignUp } from "../../services/Auth";
import actionType from "./actionType";


export const signUp = ({ data, navigate }) => async (dispath) => {
    try {
        const response = await apiSignUp(data)
        if (response.status === 201) {
            localStorage.setItem('jwt', response.data.jwt)
            dispath({
                type: actionType.SIGN_UP,
                data: response.data.jwt
            })
            if (response.data.role === "ROLE_CUSTOMER") {
                navigate('/')
            }
            else {
                navigate('/admin')
            }
        }
        else {
            dispath({
                type: actionType.SIGN_UP,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.SIGN_UP,
            data: null
        })
    }
}

export const signIn = ({ data, navigate }) => async (dispath) => {
    try {
        const response = await apiSignIn(data)
        if (response.status === 200) {
            localStorage.setItem('jwt', response.data.jwt)
            dispath({
                type: actionType.SIGN_IN,
                data: response.data.jwt
            })
            if (response.data.role === "ROLE_CUSTOMER") {
                navigate('/')
            }
            else {
                navigate('/admin')
            }
        }
        else {
            dispath({
                type: actionType.SIGN_IN,
                msg: 'Lỗi'
            })
        }

    } catch (error) {

        dispath({
            type: actionType.SIGN_IN,
            data: null
        })
    }
}
export const getUserByToken = (jwt) => async (dispath) => {
    try {
        const response = await apiGetUser(jwt)
        if (response.status === 200) {
            dispath({
                type: actionType.GET_USER_BYTOKEN,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionType.GET_USER_BYTOKEN,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.GET_USER_BYTOKEN,
            data: null
        })
    }
}

export const getAllUser = (jwt) => async (dispath) => {
    try {
        const response = await apiGetAllUser(jwt)
        if (response.status === 200) {
            dispath({
                type: actionType.GET_ALL_USER,
                data: response.data
            })
        }
        else {
            dispath({
                type: actionType.GET_ALL_USER,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.GET_ALL_USER,
            data: null
        })
    }
}

export const logOut = () => async (dispatch) => {
    try {
        localStorage.clear()

        dispatch({ type: actionType.LOGOUT })
        console.log('logout success')

    } catch (error) {
        console.log("lỗi đăng xuất: ", error)
    }
};