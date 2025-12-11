import styled from "@emotion/styled";
import type { Ref } from "react";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   max-width: 550px;
   margin: 0 auto;
   width: 100%;
   padding: 0 8px;
   box-sizing: border-box;
`;

export const Observer = styled.div<{ ref: Ref<HTMLDivElement> }>`
   height: 1px;
`;
