export interface ProfileInfoInterface {
   id: number;
   email: string;
   firstName: string;
   lastName: string;
   image: string | undefined;
   birthDate: string;
   age: number;
   gender: string;
   address: AddressInterface;
   username: string;
   company: {
      name: string;
   };
   university: string;
}

export interface AddressInterface {
   city: string;
   country: string;
}
