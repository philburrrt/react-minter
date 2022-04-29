import styledComponents from "styled-components";

export const ErrorMsg = styledComponents.p`
    font-size: 0.75rem;
    margin: 0;
`;

export const MinterDIV = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;
`;
export const IncrementButton = styledComponents.button`
    margin: 4px;
`;
export const MintButton = styledComponents.button`
    top: 4px;
`;
export const InputBox = styledComponents.input`
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }  

    text-align: center;
    width: 75px;
`;

export const MintBox = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;
