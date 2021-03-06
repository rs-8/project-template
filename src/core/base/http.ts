import axios, { AxiosInstance } from 'axios';

export interface HttpClient extends AxiosInstance {};

export const http: HttpClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});