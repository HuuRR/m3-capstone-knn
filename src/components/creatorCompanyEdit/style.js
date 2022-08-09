import { FormControl, TextField } from "@mui/material";
import styled from "styled-components";
export const StyledUserCard = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 90%;
  max-width: 1000px;
  gap: 10px;
  margin: 10px 0px;

  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
`;
export const StyledUserTop = styled.div`
  display: flex;
  flex-direction: column;

  width: 97%;  

  gap: 30px;
  margin: 15px;
  margin-bottom: 25px;

  @media (min-width: 1000px){
    display: flex;
    flex-direction: column;
  }


`;

export const StyledUrlPhoneContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;
  
  margin-bottom: 25px;

  @media (max-width: 500px) {
    input {
      width: 100%;
      
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
  }
`;
 

export const StyledUserOptions = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 30px;
  margin: 15px;

`;

export const StyledCepStateContainer = styled.div`
  width: 100%;

  @media (min-width: 1000px){
    display: flex;

  }
`

export const StyledSaveChanges = styled.div`
  display: flex;
  align-items: stretch;  
  flex-direction: column;

  margin: 20px 20px 20px 20px;
`;
export const StyledTitleAdress = styled.div`
  margin: 15px;
  font-weight:bolder;
  font-size:1.5rem;

  text-align: center;
`;

export const StyledTitleData = styled.div`
  margin: 15px;
  font-weight:bolder;
  font-size:1.5rem;

  text-align: center;
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
  
  @media (min-width: 1000px){
    
    display: flex;
    
  }
  
`

export const StyledTextField = styled(TextField)`

  width: 100%;
    
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
