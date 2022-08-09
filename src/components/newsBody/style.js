import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;

    width: 90vw;

    border-radius: 10px;

    margin-top: 2vh;
    margin-bottom: 2vh;
    
    color:#FFFFFF;
    background-color: #281E1E;

    section{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 0 auto;
        padding: 0 .7rem;

        font-size: 14px;
        text-align: justify;
        line-height: 20px;

        @media(min-width: 600px) {
            font-size: 16px;
            margin-left: 5px;
            margin-right: 5px;
        }
    }
`

export const AuthContent = styled.div`
    display: flex;
    justify-content: flex-end;

    padding-right: 1.3rem;
    margin-top: 20px;

    font-style: italic;
    font-size: 12px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 20px ;

    h2{
        text-align: justify;
        font-size: 20px;
        

        margin: 20px 15px;

    }

    figure{
        display: flex;
        flex-direction: column;

        margin-left: 15px;
        margin-right: 15px;    

        img{
            border-radius: 10px;
        }
    
        figcaption{
            font-size: 16px;
            font-style: italic;
            text-align: center;

            margin-top: 20px;
        }
    }
`
export const NewsRatings=styled.div`
    margin: 20px auto;

    legend{
        text-align: center;
        font-size: 20px;
        font-weight: bold;
    }

    span{
        margin-left: 12px;
    }

    button{
        margin-left: 8px;
        margin-top: 10px;
    }
`

export const StyledContainerStars = styled.div` 
    display: flex;
    justify-content: center;

    margin: auto;
`

export const NewsButtons=styled.div`

`

export const NewsButtonCreator = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;   
    border-radius: 10px;

    width: 5rem;
    height: 2rem;

`

export const NewsButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    
    gap: 25px;

    width: 100%;
`

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: auto;

    width: 95%;
    margin: 10px auto;

    gap: 15px;
`


