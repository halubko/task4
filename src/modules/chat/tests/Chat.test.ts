import { describe, expect, it } from "vitest";
import { formatDateUtils } from "@/modules/chat/utils/formatDate.utils.ts";
import type { MessageInterface } from "@/modules/chat/interfaces/Socket.Interfaces.ts";
import socketStore from "@/modules/chat/store/socket.store.ts";

describe("format date", () => {
   it("should format from ISO to DD month HH:MM", () => {
      const mockDate = "1995-05-05T00:00:00.000Z";

      const result = formatDateUtils(mockDate);

      expect(result).toBe("May 5 at 03:00 AM");
   });
});

describe("store tests", () => {
   it("should push message to messages state", () => {
      const mockMessage: MessageInterface = {
         type: "message:receive",
         id: "1",
         senderId: 1,
         senderName: "Test Name",
         content: "Test Message",
         createdAt: "2019-02-05T00:00:00.000Z",
      };

      socketStore.addMessage(mockMessage);

      expect(socketStore.messages[0]).toStrictEqual(mockMessage);
   });
});
