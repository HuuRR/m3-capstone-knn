import {
  Container,
  Content,
  ContentImg,
  ContentInfo,
  ContentUser,
} from "./style";
import {useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";

export function CardNewsOverview({ article }) {

  const {getOneNewsById} = useContext(NewsContext)

  const navigate = useNavigate()

  function resumeDescription(content) {
    if (content.split("").length > 50) {
      return content.split(" ").splice(0, 15).join(" ") + "...";
    }
    return content;
  }

  function handleNavigation(){
    navigate(`/news/${article.id}`)
  }

  return (
    <Container onClick={() =>{
      handleNavigation()
      getOneNewsById(article.id)
      }}>

        
          <ContentImg>
            <figure>
              <img src={article.urlToImage} alt={article.title} />
            </figure>
          </ContentImg>

          <Content>
            <p>
              {resumeDescription(article.description)}
            </p>
            <ContentInfo>
              <div>{article.category}</div>
            </ContentInfo>
          </Content>

      <ContentUser>

        <figure>
          <img src={article.authorImg} alt={article.name} />
        </figure>

        <span>{typeof article.name === "string" ? article.name.slice(0,10) + "..." : null }</span>

      </ContentUser>
    </Container>
  );
}
