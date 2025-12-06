import socketStore from "@/modules/chat/store/socket.store.ts";
import { toast } from "react-toastify";
import { useLocation } from "@tanstack/react-router";

export const useWebSocket = () => {
   const { pathname } = useLocation();

   const connect = () => {
      const socket = new WebSocket("ws://localhost:3000");

      socketStore.socket = socket;

      socket.onopen = () => {
         const message = {
            type: "connection",
            data: {
               token: localStorage.getItem("accessToken"),
            },
         };
         socket?.send(JSON.stringify(message));
      };

      socket.onmessage = (event: MessageEvent) => {
         const message = JSON.parse(event.data);

         switch (message.type) {
            case "message:receive": {
               const messageData = message.data;
               if (!pathname.startsWith("/messages")) {
                  toast(`${messageData.senderName}: ${messageData.content}`);
               }
               socketStore.addMessage(messageData);
               break;
            }
         }
      };

      socket.onclose = () => {
         socketStore.socket = null;
      };
   };

   const sendMessage = (message_text: string, recipientId: number) => {
      const socket = socketStore.socket;

      const message = {
         type: "message:send",
         recipientId: recipientId,
         content: message_text,
      };

      socket?.send(JSON.stringify(message));
   };

   const messages = socketStore.messages;

   const disconnect = () => {
      const socket = socketStore.socket;
      socket?.close();
   };

   return { connect, disconnect, sendMessage, messages };
};
