import axios, { AxiosError, AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const accessKey = process.env.NEXT_PUBLIC_API_KEY;
    if (accessKey) {
      config.params = { ...(config.params || {}), access_key: accessKey };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

interface ApiErrorResponse {
  error?: {
    code: number;
    type: string;
    message: string;
  };
}

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    if (error.response) {
      const { data, status } = error.response;

      if (data?.error) {
        const { code, type, message } = data.error;
        console.error(`API Error [${code} - ${type}]: ${message}`);

        switch (code) {
          case 401:
            if (type === 'invalid_access_key' || type === 'missing_access_key') {
              console.error('Error de acceso: clave inválida o ausente.');
            } else if (type === 'inactive_user') {
              console.error('El usuario se encuentra inactivo.');
            }
            break;
          case 403:
            if (type === 'function_access_restricted') {
              console.error('Acceso restringido: La función no está disponible en tu plan.');
            }
            break;
          case 404:
            if (type === 'invalid_api_function' || type === '404_not_found') {
              console.error('Recurso no encontrado.');
            }
            break;
          case 429:
            if (type === 'usage_limit_reached' || type === 'rate_limit_reached') {
              console.error('Se ha alcanzado el límite de uso o la tasa permitida de solicitudes.');
            }
            break;
          case 500:
            if (type === 'internal_error') {
              console.error('Error interno en la API.');
            }
            break;
          default:
            console.error(`Error no manejado: [${code}] ${type}`);
        }
      } else {
        console.error(`Error HTTP ${status}`, data);
      }
    } else {
      console.error('Error sin respuesta de la API', error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
