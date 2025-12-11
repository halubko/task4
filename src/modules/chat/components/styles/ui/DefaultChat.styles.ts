import styled from "@emotion/styled";
import { ChatWrapper as ChatWrapper } from "@/modules/chat/components/styles/Chat.styles.ts";

export const DefaultChatMainWrapper = styled(ChatWrapper)`
   width: 100%;
   justify-content: center;
`;

export const DefaultChatWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 15px;
   font-weight: bold;
   font-size: 1rem;
`;
