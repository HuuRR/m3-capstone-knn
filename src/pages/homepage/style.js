import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;

  margin-top: 20px;
  margin-bottom: 20px;

  border-radius: 10px;

  min-height: 100vh;
  height:auto;

  width: 95%;
  max-width: 800px;

  background-color: #281e1e;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
  margin-bottom: 20px;

  border-radius: 10px;

  background-color: #281e1e;

  padding: 1rem;

  p {
    color: #ffffff;
    font-size: 36px;
  }
`;
