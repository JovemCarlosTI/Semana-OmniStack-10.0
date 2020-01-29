import axios from 'axios';

const api = axios.create({
    baseURL: 'Adicione aqui o ip com a porta, tudo isso é exposto no próprio Expo',
});

export default api;