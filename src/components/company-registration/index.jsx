import { useForm, useInput } from "lx-react-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "../../style/index.js";
import { Anchor, AnchroContainer, Form, Title } from "../login/style.js";
import { SuccessMessage } from "./style";

function CompanyRegistration() {
  const { userCreate } = useContext(UserContext);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  if (error === "Email already exists") {
    setError("Email já cadastrado");
  }

  const name = useInput({
    name: "name",
  });

  const cnpj = useInput({
    name: "cnpj",
    customMask: {
      expressions: [
        {
          regex: /\D/g,
          replace: "",
        },
        {
          regex: /(\d{2})(\d)/,
          replace: "$1.$2",
        },
        {
          regex: /(\d{3})(\d)/,
          replace: "$1.$2",
        },
        {
          regex: /(\d{3})(\d)/,
          replace: "$1/$2",
        },
        {
          regex: /(\d{4})(\d{1,2})$/,
          replace: "$1-$2",
        },
      ],
    },
    minLength: 18,
    maxLength: 18,
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
    formFields: [name, cnpj, email, password, confirmPassword, type],
    submitCallback: (formData) => {
      //console.log(formData);
      userCreate(formData, setError, setSuccess);
    },
  });

  return (
    <Container >
			<Title>Cadastro</Title>
			<h3>Empresa Parceira</h3>
			<Form className="forme" onSubmit={form.handleSubmit}>
				<TextField
					type="text"
					label="Nome da Empresa"
					error={name.error && true}
					helperText={name.error}
					{...name.inputProps}
				/>

				<TextField
					type="text"
					label="CNPJ"
					error={cnpj.error && true}
					helperText={cnpj.error}
					{...cnpj.inputProps}
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
						<MenuItem value="company">
							Estou a procura de colunistas
						</MenuItem>
						<MenuItem value="company">
							Estou a procura de jornalistas
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
				Já possui uma conta? <Anchor href="/login">Clique aqui </Anchor>{" "}
				e faça login.
			</AnchroContainer>
		</Container>
  );
}

export default CompanyRegistration;
