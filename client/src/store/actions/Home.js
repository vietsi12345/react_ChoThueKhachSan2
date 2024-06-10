import actionType from "./actionType";
import { apiGetAlltHomes, apiGetHomesByCityName, apiGetHotelByID, apiGetListCities, apiSearchHomesByName } from '../../services/Home'

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