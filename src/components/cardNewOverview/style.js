import styled from "styled-components";

export const Container = styled.button`
  display: flex;

  width: 95%;
  max-width: 800px;
  min-height: 6.5rem;

  margin: 10px auto;

  border-radius: 10px;
  border: none;

  background-color: #D9D9D9;
`;

export const ContentImg = styled.div`
  display: flex;

/*   width: 50%; */
  height: 110px;
  width: 200px;

  border-right: 1px solid black;

  figure {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 80%;
  max-width: 600px;

  min-height: 85%;
  height: 80px;

  margin-top: 5px;

  p{
    font-size: 10px;
    margin-left: 5px;
    text-align: justify;

    margin-right: 5px;

    @media(min-width: 420px) {
      font-size: 11px;
    }

    @media(min-width: 500px) {
      font-size: 12px;
    }

    @media(min-width: 650px) {
      font-size: 14px;
    }
  }

`;

export const ContentInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 5px;

  padding: 5px;

  div{

    width: 100px;

    border-radius: 10px;

    color: #FFFFFF;
    background-color: #240947;

    padding: 5px;

    font-weight: 600;
    font-size: 10px;
  }

  @media(min-width: 768px) {
      padding-top: 15px;
  }
`;

export const ContentUser = styled.div`
  display: none;
  flex-direction: column;

  span{
    display: flex;
    justify-content: center;

    width: 5rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    

    figure {
      width: 50px;
      height: 50px;


      img {
        width: 100%;
        height: 100%;

        border-radius: 50%;
      }
    }
  }


`;
