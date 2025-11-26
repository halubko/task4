import type { AddressInterface } from "@/modules/profile/interfaces/ProfileInfo.Interface.ts";

export const getLocation = ({ city, country }: AddressInterface) => {
   if (country === "United States") {
      country = "USA";
   }

   return city + ", " + country;
};

export const getBirthDateWithAge = (birthDate: string, age: number) => {
   const date = new Date(birthDate).toLocaleDateString("ru-RU");

   return date + " (" + age + ")";
};
