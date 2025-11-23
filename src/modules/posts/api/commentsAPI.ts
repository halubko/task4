import axios from "axios";
import { BASE_URL } from "@/constants/constants.ts";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "/comments",
});

export const setCommentLike = async ({
   commentId,
   likes,
}: {
   commentId: number;
   likes: number;
}) => {
   const response = await axiosInstance.put(`/${commentId}`, {
      likes: likes,
   });
   return response.data;
};

export const addComment = async ({
   body,
   postId,
   userId,
}: {
   body: string;
   postId: number;
   userId: number;
}) => {
   const response = await axiosInstance.post("/add", {
      body,
      postId,
      userId,
   });
   return response.data;
};
