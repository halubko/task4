import { type AxiosResponse } from "axios";
import type {
   AddUserInterface,
   UserInfoInterfaces,
} from "@/modules/auth/interfaces/UserInfo.Interfaces.ts";
import axios from "axios";
import { BASE_URL } from "@/constants/constants.ts";
import type { RefreshTokensInterfaces } from "@/modules/auth/interfaces/RefreshTokens.Interfaces.ts";

const axiosInstanceUsers = axios.create({
   baseURL: BASE_URL + "/users",
});

const axiosInstanceAuth = axios.create({
   baseURL: BASE_URL + "/auth",
});

export const loginUser = async () => {
   const response: AxiosResponse<UserInfoInterfaces> = await axiosInstanceUsers.post("/login", {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 15,
   });
   return response.data;
};

export const addUser = async ({ firstName, lastName, password, email }: AddUserInterface) => {
   const response: AxiosResponse<UserInfoInterfaces> = await axiosInstanceUsers.post("/add", {
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

   const response: AxiosResponse<UserInfoInterfaces> = await axiosInstanceUsers.get("/me", {
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

   const response: AxiosResponse<RefreshTokensInterfaces> = await axiosInstanceAuth.post(
      "/refresh",
      {
         refreshToken: refreshToken,
         expiresInMins: 15,
      }
   );
   return response.data;
};
