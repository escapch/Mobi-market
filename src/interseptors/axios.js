import axios from 'axios';

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      const refreshToken = localStorage.getItem('refreshToken');

      if (refreshToken) {
        try {
          const response = await axios.post(
            'https://neobook.online/mobi-market/users/login/refresh/',
            { refresh: refreshToken },
          );
          const newAccessToken = response.data.access;
          if (newAccessToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
            // Перепрошиваем оригинальный запрос
            return axios(error.config);
          }
        } catch (refreshError) {
          // Обработка ошибки обновления токена
          console.error('Error refreshing token:', refreshError);
          // Возможно, здесь вы захотите выполнить какие-то дополнительные действия, например, перенаправить пользователя на страницу входа.
        }
      }
    }
    refresh = false;
    return error;
  },
);
