import axios from '~/services/axios';

const publicAccomPlaceAPI = {
    getAllAccomCategoryInfo: async () => {
        const response = await axios.get('/public/accoms/cate-info');
        return response.data;
    },
    getRoomDetail: async (id) => {
        const res = await axios.get(`/public/accoms/${id}/detail`);
        return res.data;
    },
    getRoomCategory: async () => {
        const res = await axios.get(`/public/accoms/cate-info`)
        return res.data;
    },
    getTophome: async (data) => {
        const res = await axios.get(`/public/accoms/top?pageNumber=${data.number}&pageSize=${data.size}`)
        return res.data;
    },
    getListHomeOfHost: async (data) => {
        const res = await axios.post(`/public/homes/${data}/detail`);
        return res;
    },
    checkBooking: async (data) => {
        const res = await axios.post(`/public/accoms/check-booking`, data);
        return res.data;
    },
};
export default publicAccomPlaceAPI;
