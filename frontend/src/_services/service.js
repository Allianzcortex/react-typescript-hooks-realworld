import axios from "axios";

const baseUrl = "http://localhost:4000/api/v1"

const restfulApiService = axios.create({
    // baseUrl: baseUrl
})

restfulApiService.interceptors.request.use(function (config) {
    console.log('request sent')
    return config;
})

// restfulApiService.headers['bearer'] = 'aaa';

export {restfulApiService}
