import { useQuery } from "@tanstack/react-query";
import { getMessagesWithUserId } from "@/modules/chat/api/api.ts";

const useGetMessages = (recipientId: number) => {
   return useQuery({
      queryKey: ["get", "messages", recipientId],
      queryFn: () => getMessagesWithUserId(Number(recipientId)),
   });
};

export default useGetMessages;
