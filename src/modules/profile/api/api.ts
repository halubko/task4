import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "@/constants/constants.ts";
import type {
   ProfileInterfaces,
   ProfileUpdateInterface,
} from "@/modules/profile/interfaces/Profile.Interfaces.ts";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "/users",
});

export const getUser = async (id: number) => {
   const response: AxiosResponse<ProfileInterfaces> = await axiosInstance.get(`/${id}`);
   return response.data;
};

export const deleteUser = async (id: number) => {
   const response: AxiosResponse<ProfileInterfaces> = await axiosInstance.delete(`/${id}`);
   return response.data;
};

export const updateUser = async (id: number, updateData: ProfileUpdateInterface) => {
   const response: AxiosResponse<ProfileInterfaces> = await axiosInstance.put(`/${id}`, updateData);
   return response.data;
};
