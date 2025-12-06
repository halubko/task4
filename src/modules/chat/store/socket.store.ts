import { makeAutoObservable } from "mobx";
import type { MessageInterface } from "@/modules/chat/interfaces/Socket.Interfaces.ts";

class SocketStore {
   socket: WebSocket | null = null;
   messages: MessageInterface[] = [];

   constructor() {
      makeAutoObservable(this);
   }

   addMessage(message: MessageInterface) {
      this.messages.push(message);
   }

   loadMessages(messages: MessageInterface[]) {
      this.messages = messages;
   }
}

export default new SocketStore();
