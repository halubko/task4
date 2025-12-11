export interface ProfileInterfaces {
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

export interface ProfileUpdateInterface {
   firstName: string;
   lastName: string;
   email: string;
   birthDate: string;
   university: string;
   company: {
      name: string;
   };
   username: string;
   image: string;
}
