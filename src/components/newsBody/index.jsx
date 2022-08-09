import {
  AuthContent,
  Container,
  Content,
  NewsButtonContainer,
  NewsButtonCreator,
  NewsButtons,
  NewsRatings,
  StyledArticle,
  StyledContainerStars,
} from "./style";
import * as React from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlagIcon from "@mui/icons-material/Flag";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { PostComments } from "../postComments";
import { CardComments } from "../cardComments";
import { NewsContext } from "../../contexts/NewsContext";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteModal } from "../deleteModal";

export function NewsBody({ article }) {
  const [value, setValue] = React.useState(2);
  const [id, setId] = React.useState();
  const [authorId, setAuthorId] = React.useState();

  const navigate = useNavigate();

  const { getComments, comments, voteArticle, reportArticle } =
    React.useContext(NewsContext);
  const { user } = useContext(UserContext);

  React.useEffect(() => {
    if (article) {
      getComments(article.id);
      setId(article.id)
      setAuthorId(article)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article]);


  return (
    <>
      {article && (
        <StyledArticle>
          <Content>
            <h2>{article.title}</h2>

            <figure>
              <img
                style={{ width: "100%", heigth: "100%" }}
                src={article.urlToImage}
                alt={article.title}
              />
              <figcaption>{article.description}</figcaption>
            </figure>
          </Content>

          <section>{article.content}</section>

          <AuthContent>
            <span>Redigido por {article.name}</span>
          </AuthContent>

          {user?.type === "content creator" && user?.id === article.authorId ? (
            <NewsButtonContainer>
              <NewsButtonCreator
                onClick={()=>navigate(`/mynews/edit/${id}`)}
              >
                Editar
              </NewsButtonCreator>
              <DeleteModal articleId={article.id}/>
              
            </NewsButtonContainer>
          ) : user?.type === "content creator" &&
            user?.id !== article.authorId ? (
            <NewsRatings>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">Nota</Typography>
                <StyledContainerStars>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </StyledContainerStars>
              </Box>

              <NewsButtons>
                <Button
                  sx={{ width: 100, background: "white", color: "#047F9E" }}
                  variant="contained"
                  onClick={() => voteArticle(article?.id, article?.likes)}
                >
                  <FavoriteIcon />
                  {article?.likes}
                </Button>

                <Button
                  sx={{ width: 100, background: "white", color: "red" }}
                  variant="contained"
                  onClick={() => reportArticle(article?.id, article?.reports)}
                >
                  <FlagIcon />
                  {article?.reports}
                </Button>
              </NewsButtons>
            </NewsRatings>
          ) : user?.type === "reader" ? (
            <NewsRatings>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">Nota</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>

              <NewsButtons>
                <Button
                  sx={{ width: 100, background: "white", color: "#047F9E" }}
                  variant="contained"
                  onClick={() => voteArticle(article?.id, article?.likes)}
                >
                  <FavoriteIcon />
                  {article?.likes}
                </Button>

                <Button
                  sx={{ width: 100, background: "white", color: "red" }}
                  variant="contained"
                  onClick={() => reportArticle(article?.id, article?.reports)}
                >
                  <FlagIcon />
                  {article?.reports}
                </Button>
              </NewsButtons>
            </NewsRatings>
          ) : (
            <NewsRatings>
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Typography component="legend">Nota</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>

              <NewsButtons>
                <Button
                  sx={{ width: 100, background: "white", color: "#047F9E" }}
                  variant="contained"
                  onClick={() => voteArticle(article?.id, article?.likes)}
                >
                  <FavoriteIcon />
                  {article?.likes}
                </Button>

                <Button
                  sx={{ width: 100, background: "white", color: "red" }}
                  variant="contained"
                  onClick={() => reportArticle(article?.id, article?.reports)}
                >
                  <FlagIcon />
                  {article?.reports}
                </Button>
              </NewsButtons>
            </NewsRatings>
          )}

          <PostComments />

          <Container>
            {comments &&
              comments.map((comment) => (
                <CardComments comment={comment} key={comment.id} authorId={authorId?.authorId} articleId={id} />
              ))}
          </Container>
        </StyledArticle>
      )}
   
    </>
  );
}
