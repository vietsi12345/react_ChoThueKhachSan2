import axios from 'axios';

export const apiZaloPay = async ({ redirectUrl, amount }) => {
    try {
        const response = await axios.post('http://localhost:8888/payment/zalopay', {
            redirectUrl,
            amount
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
