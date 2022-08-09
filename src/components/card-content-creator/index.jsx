import { NewsContext } from "../../contexts/NewsContext";
import { useContext, useEffect, useState } from "react";
import teste from "../../assets/teste.svg";
import { ContainerCreator } from "./style";
import { Button } from "@mui/material";
function ContentCreator({ name, avatar, city, state, email, phone, id }) {
  const { allNews, getAllNews, article, setSelect, setAut, aut, select } = useContext(NewsContext);
  useEffect(() => {
    getAllNews();
  }, [article]);

  const filtrados = allNews?.filter((news) => news?.authorId === id);

  return (
    <ContainerCreator>
      <div className="info">
      {avatar ? (
        <img src={avatar} alt="" />
      ) : (
        <img
          src={
            "https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg"
          }
          alt="sem imagem"
        />
      )}
        <p>{name}</p>
        {city ? (
          <p>
            {city}/{state}
          </p>
        ) : (
          <p>Não Informado</p>
        )}
        <p>{email}</p>
        <p>{phone}</p>
        <p>Postagens: {filtrados?.length}</p>
      </div>
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            setSelect(id);
            setAut(name);
          }}
        >
          Ver Noticias
        </Button>
    </ContainerCreator>
  );
}

export default ContentCreator;
