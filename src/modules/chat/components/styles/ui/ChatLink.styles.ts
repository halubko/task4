import styled from "@emotion/styled";

export const ChatLinkWrapper = styled.div<{ isActive: boolean }>`
   display: flex;
   align-items: center;
   flex-direction: column;
   background: ${({ theme }) => theme.colors.background.content};
   width: 100%;
   gap: 4px;
   border-radius: 8px;
   color: ${({ theme }) => theme.colors.text.primary};
   text-decoration: none;
   padding: 8px;
   border: ${({ theme, isActive }) => (isActive ? theme.borders.focus : theme.borders.base)};
`;

export const ElementWrapper = styled.div`
   display: flex;
   width: 100%;
`;

export const MessagePreview = styled.div`
   width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   font-size: 0.9em;
   opacity: 0.8;
`;
