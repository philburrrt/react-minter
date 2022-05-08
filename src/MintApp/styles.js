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
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 6px;
    border: #00000090 solid 1px;
`;

export const MintButton = styledComponents.button`
    top: 4px;
    border-radius: 6px;
    border: #00000090 solid 1px;
    background-color: rgba(255, 255, 255, 0.13);

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
    background-color: rgba(255, 255, 255, 0.13);
    border-radius: 6px;
`;

export const MintBox = styledComponents.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #00000000;
    width: fit-content;    
    position: absolute;
    top: 50%;
    left: 48%;
    margin-top: -50px;
    margin-left: -100px;
    background: #00000030;
    border: 1px solid #000000;
    border-radius: 11px;
    padding: 10px;
    box-shadow: -3px 5px 4px rgba(0, 0, 0, 0.25);
`;

export const P = styledComponents.p`
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
`
export const connectButton = styledComponents.button`
    border-radius: 6px;
    border: #00000090 solid 1px;
    background-color: rgba(255, 255, 255, 0.13);
`;