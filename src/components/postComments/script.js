import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  h2 {
    color: white;
  }
`;

export const BoxArea = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 10px;

  width: 90%;

  background-color: white;

  div {
    

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      color: white;

      border: none;
      border-radius: 100%;

/*       margin-right: 7px;
      margin-bottom: 5px; */

      width: 20px;
      height: 20px;

      background-color: #888888;
    }
  }
`;
