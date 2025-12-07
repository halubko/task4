import type { ChatInterface } from "@/modules/chat/interfaces/Chat.Interface.ts";

export const mockChatsList: ChatInterface[] = [
   {
      id: crypto.randomUUID(),
      recipientId: 2,
      last_sender: "You",
      last_message: "Hello",
   },
   {
      id: crypto.randomUUID(),
      recipientId: 5,
      last_sender: "Emma",
      last_message: "Have a good day!",
   },
   {
      id: crypto.randomUUID(),
      recipientId: 10,
      last_sender: "Isabella",
      last_message: "Ok",
   },
];
