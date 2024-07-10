import { StorageConstant } from '../constants/constants';
import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { BrowserUtility } from '../browser';
import { APIConstant } from '../constants/api';
axios.defaults.withCredentials = true;

const onSuccess = (response: AxiosResponse) => {
	return response.data;
};

const onError = async (error: AxiosError) => {
	console.debug('Request Failed:', error);
	if (error.response) {
		console.debug('Status:', error.response.status);
		console.debug('Data:', error.response.data);
		console.debug('Headers:', error.response.headers);
	}

	return Promise.reject(error.response || error.message);
};

export class BaseService {
	static baseURL: string = APIConstant.basePath;
	private static createInstance(
		options: any,
		isSecure: boolean,
		contentType?: any,
		cancelToken?: any
	): Promise<any> {
		let physician_info: any = localStorage.getItem("physician_info");
		physician_info = physician_info && JSON.parse(physician_info);
		let headers: any = {
			Accept: 'application/json',
			'Content-Type': contentType ? contentType : 'application/json',
			'work-space': physician_info?.work_space ? physician_info?.work_space : '',
		};
		if (isSecure) {
			headers['Authorization'] = `Bearer ${BrowserUtility.get('token')}`;
		}
		const client: AxiosInstance = axios.create({
			baseURL: BaseService.baseURL,
			headers: { ...headers },
			cancelToken,
		});

		client.interceptors.response.use(

			(response) => {
				return response;
			},
			async function (error) {
				const originalRequest = error.config;
				if (
					error.response.status === 401 &&
					originalRequest.url ===
					BaseService.baseURL + APIConstant.refreshTokenUrl
				) {
					console.log('Refresh token is invalid.');
					localStorage.clear();
					window.location.href = '/login';
					return Promise.reject(error);
				}

				if (
					error.response.data.code === 'token_not_valid' &&
					error.response.status === 401
				) {
					const refreshToken = BrowserUtility.get(StorageConstant.refresh) || '';
					if (refreshToken) {
						const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
						// exp date in token is expressed in seconds, while now() returns milliseconds:
						const now = Math.ceil(Date.now() / 1000);

						if (tokenParts.exp > now) {
							return client
								.post(APIConstant.refreshTokenUrl, { refresh: refreshToken })
								.then((response: any) => {
									BrowserUtility.save(
										StorageConstant.token,
										response.data.access
									);
									client.defaults.headers.common['Authorization'] =
										'Bearer ' + response.data.access;
									originalRequest.headers['Authorization'] =
										'Bearer ' + response.data.access;
									originalRequest.headers['work-space'] =
										physician_info?.work_space ? physician_info?.work_space : '';
									return client(originalRequest);
								})
								.catch((err) => {
									console.log('Refresh token api error', err);
								});
						} else {
							console.log('Refresh token is expired', tokenParts.exp, now);
							localStorage.clear();
							window.location.href = '/login';
						}
					} else {
						console.log('Refresh token not available.');
						localStorage.clear();
						window.location.href = '/login';
					}
				}
				// specific error handling done elsewhere
				return Promise.reject(error);
			}
		);
		return client(options).then(onSuccess).catch(onError);
	}

	static get<T>(
		url: string,
		isSecure: boolean = false,
		cancelToken?: any
	): Promise<T> {
		const options = {
			method: 'GET',
			url,
		};
		return BaseService.createInstance(options, isSecure, '', cancelToken);
	}

	static post<T>(
		url: string,
		data: any,
		isSecure: boolean = false,
		contentType?: any
	): Promise<T> {
		const options = {
			method: 'POST',
			url,
			data,
		};
		return BaseService.createInstance(options, isSecure, contentType);
	}

	static put<T>(
		url: string,
		data: any,
		isSecure: boolean = false,
		contentType?: any
	): Promise<T> {
		const options = {
			method: 'PUT',
			url,
			data,
		};
		return BaseService.createInstance(options, isSecure, contentType);
	}

	static deleteMethod<T>(url: string, isSecure: boolean = false): Promise<T> {
		const options = {
			method: 'DELETE',
			url,
		};
		return BaseService.createInstance(options, isSecure);
	}
}
