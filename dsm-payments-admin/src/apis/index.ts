import axios from "axios";

export const BASE_URL = "http://15.165.47.216:8080";

export const LOGIN_URI = "/admin/auth";
export const USER_PAY_URI = "/admin/pay/user";
export const BOOTH_PAY_URI = "/admin/pay/booth";
export const GET_USERS_URI = "/admin/status/user";
export const GET_LOGS = "/admin/receipt";
export const GET_BOOTHES_URI = "/admin/status/booth";
export const GET_STATUS = "/admin/status";

export const getRequest = () =>
  axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: localStorage.getItem("password"),
    },
  });
