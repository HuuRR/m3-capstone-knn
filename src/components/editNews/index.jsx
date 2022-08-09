/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useForm, useInput } from "lx-react-form";
import { Button, TextField } from "@mui/material";
import { FormContainer, InputsContainer, SuccessMessage } from "./style";
import { useContext } from "react";
import { NewsContext } from "../../contexts/NewsContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function EditNews() {
  const { editArticle, getOneNewsById, article } = useContext(NewsContext);

  const { id } = useParams();

  const navigate = useNavigate();

  const [success, setSuccess] = useState(false) 

  useEffect(() => {
    getOneNewsById(id);
  }, []);

  const title = useInput({
    name: "title",
    initialValue: article.title,
  });

  const urlToImage = useInput({
    name: "urlToImage",
    initialValue: article.urlToImage,
  });

  const description = useInput({
    name: "description",
    initialValue: article.description,
  });

  const content = useInput({
    name: "content",
    initialValue: article.content,
  });

  const form = useForm({
    clearFields: true,
    formFields: [title, urlToImage, description, content],
    submitCallback: (formData) => {
      editArticle(formData, id, setSuccess);
    },
  });

  return (
    <>
      <FormContainer>
        <h2>Editar notícia</h2>
        <form onSubmit={form.handleSubmit}>
          <InputsContainer>
            <TextField
              type="text"
              error={title.error && true}
              label="Título da notícia"
              helperText={title.error}
              {...title.inputProps}
              style={{ width: "100%", marginTop: 20 }}
            />

            <TextField
              type="link"
              error={urlToImage.error && true}
              label="Imagem da notícia (url)"
              helperText={urlToImage.error}
              {...urlToImage.inputProps}
              style={{ width: "100%", marginTop: 20 }}
            />
          </InputsContainer>

          <TextField
            type="text"
            multiline
            minRows={5}
            maxRows={10}
            error={description.error && true}
            label="Descrição da notícia"
            helperText={description.error}
            {...description.inputProps}
            style={{ width: "95%", marginTop: 20 }}
          />

          <TextField
            type="text"
            multiline
            minRows={10}
            maxRows={20}
            error={content.error && true}
            label="Notícia geral"
            helperText={content.error}
            {...content.inputProps}
            style={{ width: "95%", marginTop: 20 }}
          />

          <Button
            variant="contained"
            type="submit"
            style={{ width: "95%", marginTop: 20 }}
          >
            
            Salvar alterações
          </Button>
          <Button
          onClick={()=>navigate("/")}
            variant="contained"
            type="submit"
            style={{ width: "95%", marginTop: 20, marginBottom: 20 }}
          >
            Voltar
          </Button>
          {
            success? (
                <SuccessMessage> Notícia atualizada com sucesso</SuccessMessage>
            ) : (
                null
            )
        }
        </form>
      </FormContainer>
    </>
  );
}
