import axiosConfig from '../axiosConfig'

export const apiGetRoomsByIdHotelAndTypeRoom = (idHotel, name) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/room/rooms-by-hotel-and-type/${idHotel}/${name}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetTypeRoom = (idHotel) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/room/types/${idHotel}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetRoomById = (idRoom) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/room/get/${idRoom}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

