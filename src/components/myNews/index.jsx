/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { NewsContext } from "../../contexts/NewsContext";
import { CardNewsOverview } from "../cardNewOverview";
import { Anchor, AnchroContainer, Container, Content } from "./style";

export function MyNews(){

    const {allNews, getAllNews, article} = useContext(NewsContext)

    const id = JSON.parse(localStorage.getItem("@KNN-ID"));

    useEffect(()=>{
        getAllNews()
    }, [article])


    const filtered = allNews?.filter((article)=> article.authorId === id)

    return(
        <Container>
            {   
                filtered && filtered.length !== 0 ? (
                filtered?.map((article) =>(
                    <CardNewsOverview article={article} key={article.id} />
                  ))
                ) : 
                (
                    <Content>
                        <h2>Que pena, você ainda não possui nenhuma notícia...</h2>
                        <AnchroContainer>
                            <Anchor href="/mynews/create">
                                Crie uma notícia!
                            </Anchor>
                        </AnchroContainer>
                    </Content>
                )
            }
        </Container>
    )
}