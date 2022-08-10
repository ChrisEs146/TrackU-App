import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;
const API = axios.create({ baseURL: REACT_APP_BASE_URL });

// Sign In - Sign Up
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
