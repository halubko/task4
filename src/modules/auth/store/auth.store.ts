import { makeAutoObservable } from "mobx";
import type { UserInfoInterfaces } from "@/modules/auth/interfaces/UserInfo.Interfaces.ts";
import type { RefreshTokensInterfaces } from "@/modules/auth/interfaces/RefreshTokens.Interfaces.ts";

class AuthStore {
   id: number = 0;
   firstName: string = "";
   lastName: string = "";
   email: string = "";
   profilePictureUrl?: string = "";
   accessToken: string = "";
   refreshToken: string = "";
   isAuth: boolean = false;

   constructor() {
      makeAutoObservable(this);
   }

   setUser(data: UserInfoInterfaces) {
      this.id = data.id;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.email = data.email;
      this.profilePictureUrl = data.image;
      this.isAuth = true;
   }

   setTokens({ accessToken, refreshToken }: RefreshTokensInterfaces) {
      this.accessToken = accessToken;
      this.refreshToken = refreshToken;
      localStorage.setItem("accessToken", this.accessToken);
      localStorage.setItem("refreshToken", this.refreshToken);
   }

   logout() {
      this.id = 0;
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.profilePictureUrl = "";
      this.accessToken = "";
      this.refreshToken = "";
      this.isAuth = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
   }
}

export default new AuthStore();
