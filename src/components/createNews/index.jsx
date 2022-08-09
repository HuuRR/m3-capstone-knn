import React, { useContext, useState } from 'react'
import { useForm, useSelect, useInput } from "lx-react-form";

import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'

import { FormContainer, InputsContainer, StyledFormControl, StyledInput, SuccessMessage } from './style'
import { NewsContext } from '../../contexts/NewsContext';
import { UserContext } from '../../contexts/UserContext';

export default function CreateNews() {

    const {createArticle} = useContext(NewsContext)
    const {user} = useContext(UserContext) 

    const [success, setSuccess] =useState(false) 


    const title = useInput({
        name: 'title'
    })

    const category = useSelect({
        name: 'category'
    })

    const urlToImage = useInput({
        name: 'urlToImage'
    })

    const description = useInput({
        name: 'description'
    })

    const content = useInput({
        name: 'content'
    })

    const form = useForm({
        clearFields: true,
        formFields: [title, category, urlToImage, description, content],
        submitCallback: (formData) => {
            createArticle(formData, user, setSuccess)
        }
    })


  return (
    <>    
    <FormContainer>
        <h2>Criar Notícia</h2>
        <form onSubmit={form.handleSubmit}>
            
            <InputsContainer>
                <StyledInput
                type="text"
                error={title.error && true}
                label="Título da notícia"
                helperText={title.error}
                {...title.inputProps}
                style={{width: '100%', marginTop: 20}}
            />            

                <StyledFormControl style={{width: '100%', marginTop: 20}}>
                    <InputLabel>Categoria</InputLabel>
                    <Select {...category.inputProps} label="Categoria" >
                        <MenuItem value="saúde">Saúde</MenuItem>
                        <MenuItem value="tecnologia">Tecnologia</MenuItem>
                        <MenuItem value="esporte">Esporte</MenuItem>
                        <MenuItem value="entretenimento">Entretenimento</MenuItem>
                        <MenuItem value="gastronomia">Gastronomia</MenuItem>
                    </Select>
                
                </StyledFormControl>

                <StyledInput
                    type="link"
                    error={urlToImage.error && true}
                    label="Imagem da notícia (url)"
                    helperText={urlToImage.error}
                    {...urlToImage.inputProps}
                    style={{width: '100%', marginTop: 20}}
                />
            </InputsContainer>     

            <TextField
                type="text"
                multiline
                minRows={1}
                maxRows={10}                
                error={description.error && true}
                label="Descrição da notícia"
                helperText={description.error}
                {...description.inputProps}
                style={{width: '95%', marginTop: 20}}
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
                style={{width: '95%', marginTop: 20}}
            />
            

            <Button variant="contained" type="submit" style={{width: '95%', marginTop: 20, marginBottom: 20}}> Criar notícia </Button>
        </form>
        
        {
            success? (
                <SuccessMessage> Notícia criada com sucesso</SuccessMessage>
            ) : (
                null
            )
        }

    </FormContainer>
    </>
  )
}