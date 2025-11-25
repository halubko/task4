import axios, { type AxiosResponse } from "axios";
import { BASE_URL } from "@/constants/constants.ts";
import type { PostsResponseInterface } from "@/modules/posts/interfaces/Post.Interfaces.ts";
import type { PostCommentsResponseInterface } from "@/modules/posts/interfaces/Comment.Interfaces.ts";
import type { CreateFormBody } from "@/modules/posts/interfaces/CreateFormValues.interfaces.ts";

const axiosInstance = axios.create({
   baseURL: BASE_URL + "/posts",
});

export const getPosts = async ({ pageParam }: { pageParam: number }) => {
   const response: AxiosResponse<PostsResponseInterface> = await axiosInstance.get("", {
      params: {
         limit: 10,
         skip: pageParam,
      },
   });
   return response.data;
};

export const getPostsByUserId = async (pageParam: number, userId: number) => {
   const response: AxiosResponse<PostsResponseInterface> = await axiosInstance.get(
      `/user/${userId}`,
      {
         params: {
            limit: 10,
            skip: pageParam,
         },
      }
   );
   return response.data;
};

export const getComments = async (id: number) => {
   const response: AxiosResponse<PostCommentsResponseInterface> = await axiosInstance.get(
      `/${id}/comments`
   );
   return response.data;
};

export const setPostLike = async ({ postId, likes }: { postId: number; likes: number }) => {
   const response = await axiosInstance.put(`/${postId}`, {
      reactions: {
         likes: likes,
      },
   });
   return response.data;
};

export const createPost = async ({ title, body, userId }: CreateFormBody) => {
   const response = await axiosInstance.post("/add", {
      title: title,
      body: body,
      userId: userId,
   });
   return response.data;
};
