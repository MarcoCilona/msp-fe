/* eslint-disable sort-keys */
import axios, { AxiosPromise, AxiosResponse, AxiosError } from 'axios';

const repository = axios.create({
  baseURL: process.env.VUE_APP_URL,
});
// const responseInterceptedStatuses = [400, 404];

interface CustomResponse {
  isOk: boolean,
  data: any
}

repository.interceptors.response.use((response: AxiosResponse<any>) => ({ data: response.data, isOk: true } as unknown as AxiosResponse<CustomResponse>), (error: AxiosError) => ({ isKo: true }));

// eslint-disable-next-line import/prefer-default-export
export const SendMailResource = {
  sendMail(payload: any): AxiosPromise<CustomResponse> {
    return repository.post('/send-mail', payload);
  }
};
