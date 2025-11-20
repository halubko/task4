import { type AxiosResponse } from "axios";
import type {
   AddUserInterface,
   UserInfoInterface,
} from "@/modules/auth/types/UserInfo.Interface.ts";
import axios from "axios";
import { BASE_URL } from "@/constants/constants.ts";
import type { RefreshTokensInterface } from "@/modules/auth/types/RefreshTokens.Interface.ts";

const axiosInstanceUsers = axios.create({
   baseURL: BASE_URL + "/users",
});

const axiosInstanceAuth = axios.create({
   baseURL: BASE_URL + "/auth",
});

export const loginUser = async () => {
   const response: AxiosResponse<UserInfoInterface> = await axiosInstanceUsers.post("/login", {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 15,
   });
   return response.data;
};

export const addUser = async ({ firstName, lastName, password, email }: AddUserInterface) => {
   const response: AxiosResponse<UserInfoInterface> = await axiosInstanceUsers.post("/add", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
   });
   return response.data;
};

export const checkToken = async () => {
   const accessToken = localStorage.getItem("accessToken");

   if (!accessToken) {
      throw new Error("No access token found");
   }

   const response: AxiosResponse<UserInfoInterface> = await axiosInstanceUsers.get("/me", {
      headers: {
         Authorization: `Bearer ${accessToken}`,
      },
   });
   return response.data;
};

export const refreshToken = async () => {
   const refreshToken = localStorage.getItem("refreshToken");

   if (!refreshToken) {
      throw new Error("No refresh token found");
   }

   const response: AxiosResponse<RefreshTokensInterface> = await axiosInstanceAuth.post(
      "/refresh",
      {
         refreshToken: refreshToken,
         expiresInMins: 15,
      }
   );
   return response.data;
};
