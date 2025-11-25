export interface PostCommentInterface {
   id: number;
   body: string;
   postId: number;
   likes: number;
   user: {
      id: number;
      username: string;
      fullName: string;
   };
}

export interface PostCommentsResponseInterface {
   comments: PostCommentInterface[];
   limit: number;
   skip: number;
   total: number;
}
