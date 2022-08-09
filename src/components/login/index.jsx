import { useForm, useInput } from "lx-react-form";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import { Container } from "../../style/index";
import { Anchor, AnchroContainer, Form, Title } from "./style";

function Login() {
  const { userLogin } = useContext(UserContext);
  const [error, setError] = useState(false);

  if (error === "Incorrect password") {
    setError("Senha Incorreta");
  }

  if (error === "Cannot find user") {
    setError("Email não cadastrado");
  }

  const email = useInput({ name: "email", validation: "email" });

  const password = useInput({
    name: "password",
    minLength: 8,
    validation: "senha",
  });

  const form = useForm({
    clearFields: true,
    formFields: [email, password],
    submitCallback: (formData) => {
      //console.log(formData);
      userLogin(formData, setError);
    },
  });

  return (
		<Container maxHeight="450">
			<Title>Área de Login</Title>
			<Form className="form" onSubmit={form.handleSubmit}>
				<TextField
					className="Input"
					type="email"
					error={email.error && true}
					label="Email"
					helperText={email.error}
					{...email.inputProps}
				/>
				<TextField
					type="password"
					error={password.error && true}
					label="Senha"
					helperText={password.error}
					{...password.inputProps}
				/>
				{error && <p>{error}</p>}
				<Button variant="contained" size="small" type="submit">
					Logar
				</Button>
			</Form>

			<AnchroContainer>
				<Anchor href="/register">
					Não possui uma conta? Clique aqui e faça o registro.
				</Anchor>
			</AnchroContainer>
		</Container>
  );
}

export default Login;
