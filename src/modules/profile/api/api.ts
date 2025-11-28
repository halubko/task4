import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "@/constants/constants.ts";
import type { ProfileInfoInterface } from "@/modules/profile/interfaces/ProfileInfo.Interface.ts";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "/users",
});

export const getUser = async (id: number) => {
   const response: AxiosResponse<ProfileInfoInterface> = await axiosInstance.get(`/${id}`);
   return response.data;
};

export const deleteUser = async (id: number) => {
   const response: AxiosResponse<ProfileInfoInterface> = await axiosInstance.delete(`/${id}`);
   return response.data;
};
