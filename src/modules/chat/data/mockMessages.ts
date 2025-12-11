import type { MessageInterface } from "@/modules/chat/interfaces/Socket.Interfaces.ts";

export const mockMessages: MessageInterface[] = [
   {
      type: "message:receive",
      id: crypto.randomUUID(),
      senderId: 2,
      senderName: "Michael Williams",
      content: "Hello",
      createdAt: "2025-11-04T00:00:00.000Z",
   },
   {
      type: "message:receive",
      id: crypto.randomUUID(),
      senderId: 2,
      senderName: "Michael Williams",
      content: "How you doing?",
      createdAt: "2025-11-04T00:01:00.000Z",
   },
   {
      type: "message:receive",
      id: crypto.randomUUID(),
      senderId: 1,
      senderName: "Emily Johnson",
      content: "Hi! I'm good. What about you?",
      createdAt: "2025-11-04T01:00:00.000Z",
   },
];
