export interface PostInterface {
   id: number;
   title: string;
   body: string;
   reactions: {
      likes: number;
   };
   views: number;
   userId: number;
   images?: string[];
   videoId?: string;
}

export interface PostsResponseInterface {
   posts: PostInterface[];
   limit: number;
   skip: number;
   total: number;
}
