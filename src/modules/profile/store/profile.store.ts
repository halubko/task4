import { makeAutoObservable } from "mobx";

class ProfileStore {
   isConfirmModalOpen: boolean = false;

   constructor() {
      makeAutoObservable(this);
   }

   setConfirmModalOpen(open: boolean) {
      this.isConfirmModalOpen = open;
   }

   closeAllModals() {
      this.isConfirmModalOpen = false;
   }
}

export default new ProfileStore();
