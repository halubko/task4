import { makeAutoObservable } from "mobx";

class AuthStore {
   isAuth: boolean = false;

   constructor() {
      makeAutoObservable(this);
   }
}

export default new AuthStore();
