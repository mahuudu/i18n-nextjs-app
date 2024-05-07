import { filterParamsEmpty } from '@/helper/filterParamsEmpty';
import axios from 'axios';



const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL + '/api',
});

instance.interceptors.request.use(
    (config) => {
        const accessToken =
            typeof window != 'undefined' &&
            window?.localStorage.getItem('accessToken');
        try {
            if (accessToken) {
                config.headers.Authorization = `Bearer ${JSON.parse(
                    accessToken
                )}`;
            }
        } catch (error) { }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export async function getByRouter(router: string, params?: any) {
    try {
        const response = instance.get(router, {
            params: filterParamsEmpty({ ...params })
        });
        return (await response).data;
    } catch (error: any) {
        return await new Promise((resolve) => {
            resolve(error?.response?.data);
        });
    }
}

export async function postByRouter(
    router: string,
    params: any = {}
) {
    try {
        const response = instance.post(router, filterParamsEmpty(params));
        return (await response).data;
    } catch (error: any) {
        return await new Promise((resolve) => {
            resolve(error?.response?.data);
        });
    }
}

export async function putByRouter(
    router: string,
    params: any = {}
) {
    try {
        const response = instance.put(router, filterParamsEmpty(params));
        return (await response).data;
    } catch (error: any) {
        return await new Promise((resolve) => {
            resolve(error?.response?.data);
        });
    }
}

export default instance;


