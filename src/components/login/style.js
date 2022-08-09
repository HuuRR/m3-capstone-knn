import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content:center;
  flex-direction: column;
  gap: 2em;
  
  margin: 0 auto;
  width:100%

  button{
    font-size:1rem;
    padding:1em;
  }

  @media(max-width:375px){
    align-items:center;
    margin: 0;

    button{
      width:50%;
    }
  }

`

export const Title = styled.h1`
  font-weight: 700;
  text-align: center;
  color:#1976D2;

  @media(max-width:390px){
    font-size: 1.4rem;
  }
`

export const AnchroContainer = styled.div`
  text-align:center;
  padding:2em;
`

export const Anchor = styled.a`
color: #162CF2;
font-size: 1.2rem;
font-weight: bold;
text-decoration: underlined;

  @media(max-width: 768px) {
    font-size:1rem;
  }
`