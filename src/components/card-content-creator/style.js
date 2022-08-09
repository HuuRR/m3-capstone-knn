import styled from "styled-components";

export const ContainerCreator = styled.div`
  background: white;
  width: 200px;
  border-radius: 4px;
  height:400px;
  display:flex;
  flex-flow:column;
  justify-content:space-between;
  img {
    width: 200px;
    height:200px;
    border-radius: 4px 4px 0px 0px;
  }
  p{
    margin:10px 0px;
    text-indent:5px;
  }
  .monke{
    gap:5px;    
  }
  button{
    margin: 5px;
    align-self:center;
    width: 60%;
  }
`;
