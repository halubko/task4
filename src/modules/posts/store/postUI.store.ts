import { makeAutoObservable } from "mobx";
import type { PostInterface } from "@/modules/posts/types/Post.Interfaces.ts";
import type { PostCommentsResponseInterface } from "@/modules/posts/types/Comment.Interfaces.ts";
import type { UserInfoInterface } from "@/modules/profile/types/UserInfo.Interface.ts";

class PostUIStore {
   isCreatePostOpen: boolean = false;
   selectedPost: PostInterface | null = null;
   selectedUser: UserInfoInterface | null = null;
   selectedComments: PostCommentsResponseInterface | null = null;
   postImageState: Record<number, number> = {};

   constructor() {
      makeAutoObservable(this);
   }

   setIsCreatePostOpen(value: boolean) {
      this.isCreatePostOpen = value;
   }

   openPostModal(
      post: PostInterface,
      userData: UserInfoInterface,
      comments: PostCommentsResponseInterface
   ) {
      this.selectedPost = post;
      this.selectedUser = userData;
      this.selectedComments = comments;
   }

   setCurrentImageIndex(postId: number, index: number) {
      this.postImageState[postId] = index;
   }

   closeAllModal() {
      this.isCreatePostOpen = false;
      this.selectedPost = null;
   }
}

export default new PostUIStore();
