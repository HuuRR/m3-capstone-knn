import { FormControl, TextField } from "@mui/material";
import styled from "styled-components";

export const FormContainer = styled.div`

    max-width: 1100px;

    h2{
        margin-top: 20px;
        text-align: center;
    }

    width: 90vw;

    margin: 20px auto;

    border: 1px solid black;
    border-radius: 15px;

    background-color: white;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }    
`

export const InputsContainer = styled.div`
    width: 95%;

    display: flex;
    flex-direction: column;

    @media (min-width: 1000px){
        display: flex;
        flex-direction: row;
    }
`

export const StyledInput = styled(TextField)`
    
    @media (min-width: 1000px){
        width: 10px;
    }
    
`

export const StyledFormControl = styled(FormControl)`
    
    @media (min-width: 1000px){
        width: 10px;
    }
    
`

export const SuccessMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 20px;

    width: 18rem;
    height:2rem;

    margin: 10px auto;

    background-color: lightgreen;

    font-weight: 600;
    font-size: 36;
`

