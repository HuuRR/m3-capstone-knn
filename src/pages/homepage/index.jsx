/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { CardNewsOverview } from "../../components/cardNewOverview";
import { NewsContext } from "../../contexts/NewsContext";
import { Container, Content } from "./style";

export function Homepage() {
  const {
    allNews,
    getAllNews,
    filter,
    filteredNews,
    setFilteredNews,
  } = useContext(NewsContext);

  useEffect(() => {
    getAllNews()
  }, []);

  useEffect(() => {
    if (filter!=="todos" && allNews) {
      setFilteredNews(allNews.filter((article) => article.category === filter));
    }else{
      setFilteredNews(false)
    }
  }, [filter]);

  return (
    <Container>
      {
       filteredNews && filteredNews?.length !== 0 ?   
          filteredNews?.map((article) => (
            <CardNewsOverview article={article} key={article.id} />
          ))
      : filteredNews?.length === 0 ? 
      <Content>
           <p>Ainda não possuimos notícias com esta categoria...</p>
      </Content>
      :
      allNews?.map((article) => (
        <CardNewsOverview article={article} key={article.id} />
      ))
          
      }
    </Container>
  );
}
