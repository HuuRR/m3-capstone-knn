import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column-reverse;

  margin-top: 10px;

  border-radius: 10px;

  width: 90%;
  max-width: 800px;
  min-height: 95vh;
  height: auto;

  background-color: #281e1e;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 10px;

  border-radius: 10px;

  padding: 2rem;

  width: 90%;
  height: 95%;

  background-color: #281e1e;

  h2 {
    color: #ffffff;
  }
`;

export const AnchroContainer = styled.div`
  text-align: center;
  padding: 2em;
`;

export const Anchor = styled.a`
  color: #162cf2;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underlined;
`;
