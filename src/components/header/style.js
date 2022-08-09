import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0px 5%;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
  padding-top: 10px;

  height: 100px;

  .logo--cont {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    margin-right: 10px;

    width: 30px;
    height: 30px;
    cursor: pointer;

    @media (min-width: 420px) {
      width: 50px;
      height: 50px;
    }
  }

  h1 {
    font-size: 11px;

    @media (min-width: 420px) {
      font-size: 15px;
    }
  }
`;

export const StyledHeaderList = styled.div`
  margin: 20px 10px;
  &:hover{
    cursor:pointer;
  }
`;
export const StyledHeaderButtons = styled.div`
  displa: flex;
  flex-flow: row nowrap;
  margin: 0px 10px;
  gap: 10px;
`;
