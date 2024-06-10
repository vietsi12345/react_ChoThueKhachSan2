import actionType from "./actionType";
import { apiCreateHotel, apiDeleteHotel, apiGetAlltHomes, apiGetHomesByCityName, apiGetHotelByID, apiGetListCities, apiSearchHomesByName, apiUpdateHome } from '../../services/Home'

export const getAllHome = () => async (dispath) => {
    try {
        const response = await apiGetAlltHomes()
        if (response.status === 200) {

            dispath({
                type: actionType.GET_ALLHOME,
                homes: response.data
            })
        } else {

            dispath({
                type: actionType.GET_ALLHOME,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.GET_ALLHOME,
            homes: null
        })
    }
}

export const homesSearch = (keyword) => async (dispath) => {
    try {
        const response = await apiSearchHomesByName(keyword)
        if (response.status === 200) {

            dispath({
                type: actionType.SEARCH_HOMES,
                homesSearch: response.data
            })
        } else {

            dispath({
                type: actionType.SEARCH_HOMES,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.SEARCH_HOMES,
            homesSearch: null
        })
    }
}

export const getAllCities = () => async (dispath) => {
    try {
        const response = await apiGetListCities()
        if (response.status === 200) {
            dispath({
                type: actionType.GET_ALLCITIES,
                cities: response.data
            })
        } else {

            dispath({
                type: actionType.GET_ALLCITIES,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.GET_ALLCITIES,
            cities: null
        })
    }
}

export const getHomesByCityName = (cityName) => async (dispath) => {
    try {
        const response = await apiGetHomesByCityName(cityName)
        if (response.status === 200) {
            dispath({
                type: actionType.GET_HOMESBYCITYNAME,
                homesByCity: response.data
            })
        } else {

            dispath({
                type: actionType.GET_HOMESBYCITYNAME,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.GET_HOMESBYCITYNAME,
            homesByCity: null
        })
    }
}

export const getHotelByID = (idHotel) => async (dispath) => {
    try {
        const response = await apiGetHotelByID(idHotel)

        if (response.status === 200) {
            dispath({
                type: actionType.GET_HOTELBYID,
                hotelByID: response.data
            })
        } else {

            dispath({
                type: actionType.GET_HOTELBYID,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.GET_HOTELBYID,
            hotelByID: null
        })
    }
}

export const createHotel = (formData) => async (dispath) => {
    try {
        const response = await apiCreateHotel(formData)

        if (response.status === 200) {
            dispath({
                type: actionType.POST_CREATEHOTEL,
                data: response.data
            })
        } else {

            dispath({
                type: actionType.POST_CREATEHOTEL,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.POST_CREATEHOTEL,
            data: null
        })
    }
}

export const deleteHotel = (idHotel) => async (dispath) => {
    try {
        const response = await apiDeleteHotel(idHotel)

        if (response.status === 200) {
            dispath({
                type: actionType.DELETE_HOTEL,
                data: idHotel
            })
        } else {

            dispath({
                type: actionType.DELETE_HOTEL,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.DELETE_HOTEL,
            data: null
        })
    }
}

export const updateHotel = ({ idHotel, formData }) => async (dispath) => {
    try {
        const response = await apiUpdateHome({ idHotel, formData })

        if (response.status === 200) {
            dispath({
                type: actionType.UPDATE_HOME,
                data: response.data
            })
        } else {

            dispath({
                type: actionType.UPDATE_HOME,
                msg: 'Lỗi'
            })
        }

    } catch (error) {
        dispath({
            type: actionType.UPDATE_HOME,
            data: null
        })
    }
}