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

export const apiGetRoomByIdHotel = (idHotel) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: `/api/room/get-rooms-hotel/${idHotel}`
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiCreateRoom = (formData) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: `/api/room/add/new-room`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiUpdateRoom = ({ idRoom, formData }) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'put',
            url: `/api/room/update/${idRoom}`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiDeleteRoom = (idRoom) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'delete',
            url: `/api/room/delete/room/${idRoom}`,
        })

        resolve(response)
    } catch (error) {
        reject(error)
    }
})
