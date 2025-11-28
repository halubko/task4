import { makeAutoObservable } from "mobx";

class ProfileStore {
   isConfirmeModalOpen: boolean = false;

   constructor() {
      makeAutoObservable(this);
   }

   setConfirmeModalOpen(open: boolean) {
      this.isConfirmeModalOpen = open;
   }

   closeAllModals() {
      this.isConfirmeModalOpen = false;
   }
}

export default new ProfileStore();
