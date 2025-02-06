const key = "session_token";
export const getToken = () => localStorage.getItem(key);
export const deleteToken = () => localStorage.removeItem(key);
export const setToken = (v: string) => localStorage.setItem(key, v);
