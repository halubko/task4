export interface MessageInterface {
   type?: "message:receive";
   id: string;
   senderId: number;
   senderName: string;
   content: string;
   createdAt: string;
}
