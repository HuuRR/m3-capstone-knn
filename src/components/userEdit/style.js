import styled from "styled-components";
export const StyledUserCard = styled.div`
    display:flex;
    flex-flow: column nowrap;
    width:90%;
    gap:10px;
    margin: auto;
    margin-top: 20px;
    height: 90vh;


    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
`
export const StyledUserTop = styled.div`
    display:flex;
    gap:30px;
    margin:15px;
    @media (max-width: 500px){
        input{
            width:100%
        }
    }
`
export const StyledUserOptions = styled.div`
    display:flex;
    flex-flow: column nowrap;


    padding: 0 10px;
        width: 100%;
        align-items: stretch;
        flex-direction: column;
`
export const StyledSaveChanges= styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:flex-end;
    margin:15px;
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

export const StyledP = styled.p`

    margin-top: 20px;

    text-align: center;

    width: 100%;
`