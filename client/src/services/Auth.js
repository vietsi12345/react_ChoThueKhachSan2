import axiosConfig from '../axiosConfig';

export const apiSignUp = (data) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/auth/signup',
            data: JSON.stringify(data), // Chuyển đổi dữ liệu sang chuỗi JSON
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true  // Đảm bảo credentials được gửi kèm theo
        });
        resolve(response);
    } catch (error) {
        alert('Email đã tồn tại !!')
        reject(error);
    }
});

export const apiSignIn = (data) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'post',
            url: '/auth/signin',
            data: JSON.stringify(data), // Chuyển đổi dữ liệu sang chuỗi JSON
            headers: {
                'Content-Type': 'application/json'
            },
        });
        resolve(response);
    } catch (error) {
        alert('Thông tin bạn nhập không chính xác! Tài khoản không tồn tại')
        reject(error);
    }
});

export const apiGetUser = (jwt) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/users/profile',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        resolve(response);
    } catch (error) {
        reject(error);
    }
});

export const apiGetAllUser = (jwt) => new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'get',
            url: '/api/users/all',
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        resolve(response);
    } catch (error) {
        reject(error);
    }
});


