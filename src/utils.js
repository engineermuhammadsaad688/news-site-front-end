// utils/token.js

export const saveTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};
