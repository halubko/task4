import { describe, expect, it } from "vitest";
import {
   formatBirthDate,
   getBirthDateWithAge,
} from "@/modules/profile/utils/userInfoConverters.ts";
import { profileStore } from "@/modules/profile";

describe("format birthday tests", () => {
   it("should format birth date to YYYY-MM-DD", () => {
      const mockData = {
         id: 1,
         name: "Ivan",
         birthDate: "1990-5-15",
      };

      const result = formatBirthDate(mockData);

      expect(result?.birthDate).toBe("1990-05-15");
   });

   it("should compare birth date and age to one stroke", () => {
      const mockBirthDate = "1990-5-15";
      const mockAge = 30;

      const result = getBirthDateWithAge(mockBirthDate, mockAge);

      expect(result).toBe("15.05.1990 (30)");
   });
});

describe("store tests", () => {
   it("should open/close modal", () => {
      profileStore.setConfirmModalOpen(true);
      expect(profileStore.isConfirmModalOpen).toBe(true);

      profileStore.setConfirmModalOpen(false);
      expect(profileStore.isConfirmModalOpen).toBe(false);
   });
});
