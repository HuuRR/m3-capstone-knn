import styled from "styled-components";

export const StyledProfileJournalistContainer = styled.div`
    width: 90vw;
    max-width: 1000px;
    min-height: 630px;
    max-height: 700px;

    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;

    border: 1px solid transparent;
    border-radius: 10px;

    background-color: #D9D9D9;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledImgNameContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        text-align: center;
        font-size: 25px;
        margin-top: 10px;
    }

    h3{
        text-align: center;
        font-style: italic;
        margin-top: 10px;
    }

    figure{
        width: 200px;
        height: 200px;

        margin-top: 20px;

        img{
            width: 100%;
        
            border-radius: 100%;
        }
    }

    @media (min-width: 1000px){

        
        margin-top: 20px;
        
        display: flex;
        flex-direction: row;
        justify-content: center;


        h2{
            margin-left: 20px;
        }
    }
`

export const StyledH3Container = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-left: 20px;
    margin-bottom: 10px;

    h3{
        font-size: 16px;
    }

    p{
        margin-left: 5px;
    }

        @media (min-width: 1000px){
            width: 85%;
        }
`

export const StyledMoreInformationContainer = styled.div`

    h2{
        text-align: center;
        
        margin-bottom: 10px;
    }
`

export const StyledNoInfoP = styled.p`
    margin: auto;
    text-align: center;
`



export const StyledEmailPhoneContainer = styled.div`
    height: 15%;
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    h2{
        text-align: center;
        margin-bottom: 10px;
    }


`

export const StyledAdressP = styled.p`
    font-size: 15;
    font-weight: bold;

    margin-left: 20px;
    margin-bottom: 10px;
`
export const StyledAdressInfoP = styled.p`
    font-size: 15;

    margin-left: 20px;
    margin-bottom: 10px;
`



export const StyledButtomsContainer = styled.div`    
    width: 100%;

    margin-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    button{
        margin-left: 20px;
        margin-right: 20px;
    }
    




    @media (min-width: 1000px){

        button{
            margin-left: 30px;
        }
    }
`



