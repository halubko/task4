import { makeAutoObservable } from "mobx";
import type { PostInterface } from "@/modules/posts/interfaces/Post.Interfaces.ts";
import type { PostCommentsResponseInterface } from "@/modules/posts/interfaces/Comment.Interfaces.ts";
import type { ProfileInterfaces } from "@/modules/profile/interfaces/Profile.Interfaces.ts";

class PostStore {
   isCreatePostOpen: boolean = false;
   selectedPost: PostInterface | null = null;
   selectedUser: ProfileInterfaces | null = null;
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
      userData: ProfileInterfaces,
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

export default new PostStore();
