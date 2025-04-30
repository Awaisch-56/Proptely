import { baseUrl } from '@/constant/keys';
import axios from 'axios';

const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");

const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    (response) => response, 
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = getRefreshToken();
            if (refreshToken) {
                try {
                    const response = await apiClient.post('/refresh-token', { refreshToken });
                    const newAccessToken = response.data.accessToken;

                    localStorage.setItem('accessToken', newAccessToken);
                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

                    return apiClient(originalRequest);
                } catch (refreshError) {
                    localStorage.removeItem('accessToken');
                    localStorage.removeItem('refreshToken');
                    window.location.href = '/login';
                    return Promise.reject(refreshError);
                }
            } else {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login'; 
            }
        }

        return Promise.reject(error);
    }
);


export const queryFn = async <T>(endpoint: string, params?: Record<string, any>): Promise<T> => {
    const token = getAccessToken();

    const response = await apiClient.get(endpoint, {
        params,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return response.data;
};

export const mutationFn = async (
    endpoint: string,
    method: 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    body?: Record<string, any>,
    headers?: Record<string, any>
) => {
    const token = getAccessToken();

    const response = await apiClient.request({
        url: endpoint,
        method,
        data: body,
        headers: {
            ...headers,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    });

    return response.data;
};
