import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {  $popError,$popSuccess } from './notify';
interface Options {
    url: string;
    method: string;
    headers?: object;
    params?: object | string;
    data?: object | string;
}

export class Request {
    private request<T>(opts: Options) {
        const instance: AxiosInstance = axios.create({
            baseURL: '/api',
            timeout: 6000,
        });
        this.setInterceptors(instance);
        return instance <any, T>(opts);
    }

    private setInterceptors(ins: AxiosInstance) {
        ins.interceptors.request.use((config) => {
            return config;
        });
        ins.interceptors.response.use((res: AxiosResponse) => {
            if (res.status === 200 &&  res.data.code === 200) {
                return res.data.data;
            } else {
                $popError(res.data.msg)
            }
        });
    }

    get<T>(url: string, options?: object | string) {
        return this.request<T>({
            url,
            method: 'get',
            params: options,
        });
    }

    post<T>(url: string, options?: object | string) {
        return this.request<T>({
            url,
            method: 'post',
            data: options,
        });
    }

    put<T>(url: string, options?: object | string) {
        return this.request<T>({
            url,
            method: 'put',
            data: options,
        });
    }
    
    delete<T>(url: string, options?: object | string) {
        return this.request<T>({
            url,
            method: 'delete',
            data: options,
        });
    }
}

const request = new Request();

export default request;
