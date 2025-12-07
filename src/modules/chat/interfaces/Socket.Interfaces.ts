export interface MessageInterface {
   type: string;
   id?: string;
   senderId?: number;
   senderName?: string;
   content: string;
   createdAt?: string;
}
