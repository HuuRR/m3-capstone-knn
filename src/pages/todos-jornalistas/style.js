import styled from "styled-components";

export const Creators = styled.div`
    gap:10px;
    display:flex;
    flex-flow: row wrap;
    justify-content: flex-start;

    margin: 0 auto;

    width: 78.98%;
    

    @media(max-width:800px){
        margin: 10px auto;
        display:flex;
        flex-flow:column nowrap;
        justify-content:center;
        align-items:center;
    }
`

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 10px;

  h3{
    margin: 20px 0;
    
  }

`