import styled from "@emotion/styled";
import { Link } from "@tanstack/react-router";

const LinkComponent = styled(Link)`
   width: 100%;
   text-align: center;
   border: ${({ theme }) => theme.borders.base};
   border-radius: 8px;
   padding: 8px;
   font-size: 1rem;
   box-sizing: border-box;
   color: ${({ theme }) => theme.colors.text.primary};
   text-decoration: none;
   transition: background-color 0.2s ease-in-out;
   &:hover {
      background-color: ${({ theme }) => theme.colors.background.secondary_button_hover};
      transition: background-color 0.2s ease-in-out;
   }
`;

interface FormLinkProps {
   text: string;
   path: "/signin" | "/signup";
}

const FormLink = ({ text, path }: FormLinkProps) => {
   return <LinkComponent to={path}>{text}</LinkComponent>;
};

export default FormLink;
