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
    border-radius: 6px;
    border: #00000090 solid 1px;
`;

export const connectButton = styledComponents.button`
    border-radius: 6px;
    border: #00000090 solid 1px;
`;

export const MintButton = styledComponents.button`
    top: 4px;
    border-radius: 6px;
    border: #00000090 solid 1px;

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
    border-radius: 6px;
`;

export const MintBox = styledComponents.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #00000000;
    width: fit-content;    
    position: absolute;
    top: 45%;
    left: 48%;
    margin-top: -50px;
    margin-left: -100px;
`;

export const P = styledComponents.p`
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
`
