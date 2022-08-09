import { useForm, useInput } from "lx-react-form";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { useContext, useState } from "react";

import { UserContext } from "../../contexts/UserContext";

import { Container } from "../../style/index.js";
import { Anchor, AnchroContainer, Form, Title } from "../login/style.js";
import { SuccessMessage } from "./style";

function PersonRegistration() {
  const { userCreate } = useContext(UserContext);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  if (error === "Email already exists") {
    setError("Email já cadastrado");
  }

  const name = useInput({
    name: "name",
  });

  const email = useInput({
    name: "email",
    validation: "email",
  });

  const password = useInput({
    name: "password",
    validation: "senha",
  });

  const confirmPassword = useInput({
    name: "confirmPassword",
    same: password.value,
    validation: "senha",
  });

  const type = useInput({
    name: "type",
  });

  const form = useForm({
    clearFields: true,
    formFields: [name, email, password, confirmPassword, type],
    submitCallback: (formData) => {
      //console.log(formData);
      userCreate(formData, setError, setSuccess);
    },
  });

    return (
      <Container maxHeight="750">
        <Title>Cadastro</Title>
        <h3>Leitor/Jornalista</h3>
        <Form onSubmit={form.handleSubmit}>
          <TextField
            type="text"
            label="Nome"
            error={name.error && true}
            helperText={name.error}
            {...name.inputProps}
          />
  
          <TextField
            type="email"
            label="Email"
            error={email.error && true}
            helperText={email.error}
            {...email.inputProps}
          />
  
          <TextField
            type="password"
            label="Senha"
            error={password.error && true}
            helperText={password.error}
            {...password.inputProps}
          />
  
          <TextField
            type="password"
            label="Confirmar Senha"
            error={confirmPassword.error && true}
            helperText={confirmPassword.error}
            {...confirmPassword.inputProps}
          />
  
          <FormControl fullWidth>
            <InputLabel>Qual seu interesse no site?</InputLabel>
            <Select
              label="Qual seu interesse no site?"
              {...type.inputProps}>
              <MenuItem value="reader">Sou um Leitor</MenuItem>
              <MenuItem value="content creator">
                Sou um Jornalista/Colunista
              </MenuItem>
            </Select>
          </FormControl>
          {error && <p>{error}</p>}
          {success && (
            <SuccessMessage>
            <p>
              Cadastro efetuado com sucesso, em breve você será
              direcionado
            </p>
            </SuccessMessage>
          )}
          <Button variant="contained" size="small" type="submit">
            Cadastrar
          </Button>
        </Form>
        <AnchroContainer>
          Já possui uma conta? <Anchor href="/login">Clique aqui </Anchor>
          e faça login.
        </AnchroContainer>
      </Container>
  );
}

export default PersonRegistration;
