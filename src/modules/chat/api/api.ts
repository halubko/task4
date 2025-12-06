import axios, { type AxiosResponse } from "axios";
import { authStore } from "@/modules/auth";
import type { MessageInterface } from "@/modules/chat/interfaces/Socket.Interfaces.ts";

const axiosInstance = axios.create({
   baseURL: "http://localhost:3000/api/messages",
});

export const getMessagesWithUserId = async (recipientId: number) => {
   const response: AxiosResponse<MessageInterface[]> = await axiosInstance.get(`/${recipientId}`, {
      headers: {
         userId: authStore.id,
      },
   });

   return response.data;
};
