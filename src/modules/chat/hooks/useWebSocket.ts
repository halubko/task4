import socketStore from "@/modules/chat/store/socket.store.ts";
import { toast } from "react-toastify";
import { useLocation } from "@tanstack/react-router";
import { WS_URL } from "@/modules/chat/constants/constants.ts";

export const useWebSocket = () => {
   const { pathname } = useLocation();

   const connect = () => {
      const socket = new WebSocket(WS_URL);

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
               if (!pathname.startsWith("/messages")) {
                  toast(`${message.senderName}: ${message.content}`);
               }
               socketStore.addMessage(message);
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

      // Adding for echo server. If you use my local server you should delete line below
      socketStore.addMessage(message);

      socket?.send(JSON.stringify(message));
   };

   const messages = socketStore.messages;

   const disconnect = () => {
      const socket = socketStore.socket;
      socket?.close();
   };

   return { connect, disconnect, sendMessage, messages };
};
