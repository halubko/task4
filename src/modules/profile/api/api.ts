import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "@/constants/constants.ts";
import type { UserInfoInterface } from "@/modules/profile/types/UserInfo.Interface.ts";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "/users",
});

export const getUser = async (id: number) => {
   const response: AxiosResponse<UserInfoInterface> = await axiosInstance.get(`/${id}`);
   return response.data;
};
