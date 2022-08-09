import { useContext, useEffect, useState } from "react";
import ContentCreator from "../../components/card-content-creator";

import { UserContext } from "../../contexts/UserContext";
import { NewsContext } from "../../contexts/NewsContext";
import { CardNewsOverview } from "../../components/cardNewOverview";

import Button from "@mui/material/Button";

import "./index.css";
import { Creators, StyledContainer } from "./style";

function AllJournalists() {
  const { getAllUsers, allUsers } = useContext(UserContext);

  const { allNews, getAllNews, article, setSelect, setAut, aut, select } = useContext(NewsContext);

  const filtrados = allNews?.filter((news) => news?.authorId === select);

  useEffect(() => {
    getAllUsers();
    //console.log(allUsers);
  }, []);

  if (select === false) {
    return (
      <div className="containerJornalistas">
        <h2>Criadores de Conteúdo</h2>
        <Creators >
          {allUsers?.map((user) => {
            if (user.type === "content creator") {
              return (
                <div key={user.id}>
                  <ContentCreator
                    name={user.name}
                    email={user.email}
                    phone={user.data?.phone}
                    avatar={user.avatar}
                    city={user.data?.adress.city}
                    state={user.data?.adress.state}
                    id={user.id}
                  />
                </div>
              );
            }
          })}
        </Creators>
      </div>
    );
  }

  if (select) {
    if (filtrados.length > 0) {
      return (
        <StyledContainer>
          <h3>Publicações de {aut}</h3>
          <Button
            variant="contained"
            size="small"
            onClick={() => setSelect(false)}
          >
            Voltar
          </Button>
          {filtrados &&
            filtrados.map((article) => (
              <CardNewsOverview article={article} key={article.id} />
            ))}
        </StyledContainer>
      );
    }

    if (filtrados.length === 0) {
      return (
        <StyledContainer>
          <h3>Publicações de {aut}</h3>
          <Button
            variant="contained"
            size="small"
            onClick={() => setSelect(false)}
          >
            Voltar
          </Button>
          <p>Este autor ainda não possuí publicações.</p>
        </StyledContainer>
      );
    }
  }
}

export default AllJournalists;
