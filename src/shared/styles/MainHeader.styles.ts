import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

export const MainHeaderWrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   background-color: ${({ theme }) => theme.colors.background.content};
   position: sticky;
   top: 0;
   margin-bottom: 12px;
   z-index: 3;
`;

export const MainContent = styled.header`
   display: flex;
   max-width: 1067px;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   padding: 0.5rem;
`;

export const LogoWrapper = styled(Link)`
   display: flex;
   align-items: center;
   gap: 1rem;
   color: ${(props) => props.theme.colors.text.primary};
   text-decoration: none;
   font-weight: 700;
`;

export const MainHeaderTitle = styled.h1`
   font-size: 1.6rem;
`;
