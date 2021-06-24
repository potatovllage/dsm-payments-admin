import axios from "axios";

export const BASE_URL = "https://653b9c5362f3.ngrok.io";

export const LOGIN_URI = "/admin/auth";
export const USER_PAY_URI = "/admin/pay/user";
export const BOOTH_PAY_URI = "/admin/pay/booth";

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.getItem("password"),
  },
});
