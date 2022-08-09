import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow-y: auto;

    width: 95%;
    

    margin: 10px auto;
`

export const CommentCard = styled.li`
    background-color: #D9D9D9;

    border-radius: 10px;

    padding: 1rem;

    width: 95%;
    height: 10rem;

    button{
        display: flex;
        width: 5rem;
        margin-left: 80%;
    }
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    gap: 5px;

    img{
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }

    h3{
        font-size: 15px;
        color: black;
    }
`

export const Content = styled.div`
    display: flex;

    font-size: 15px;

    width: 100%;
    min-height: 40%;
    height: auto;

    overflow-y: auto;

    margin-top: 10px;

    color: black;  
`