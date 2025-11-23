export interface UserInfoInterface {
   id: number;
   email: string;
   firstName: string;
   lastName: string;
   image?: string;
   accessToken: string;
   refreshToken: string;
}

export interface AddUserInterface {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
}

export type SignUpFormValues = {
   firstName: string;
   lastName: string;
   email: string;
   password: string;
};
