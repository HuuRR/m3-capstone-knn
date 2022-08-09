import undraw_appreciation_re_pyhy from "../../assets/undraw_appreciation_re_pyhy.svg";

import Button from "@mui/material/Button";

import { useNavigate } from "react-router";

import "./styles.css";
import { TitleContainer, Title, Subtitle } from "./style"

function RegisterPage() {
  const navigate = useNavigate();

  function person() {
    navigate("/register/person");
  }

  function enterprise() {
    navigate("/register/enterprise");
  }

  return (
    <TitleContainer>
			<div className="header-container">
				<img
					className="img--invertida"
					src={undraw_appreciation_re_pyhy}
					alt="imagem tela de registro"
				/>
				<div>
					<Title>Registre-se</Title>
					<Subtitle>
						Junte-se a nós e obtenha mais funcionalidades na
						plataforma
					</Subtitle>
				</div>
				<img
					className="img--n--invertida"
					src={undraw_appreciation_re_pyhy}
					alt="imagem tela de registro"
				/>
			</div>

			<div className="text-container">
				<div className="text-container--content">
					<div className="text-content">
						<h4>Gerador de conteúdo</h4>
						<ul className="list-container">
							<li>Seja encontrado pelos maiores contratantes</li>
							<li>Envie sua notícia ou coluna</li>
							<li>Modere comentários de suas notícias</li>
						</ul>
					</div>

					<div className="text-content">
						<h4>Leitor</h4>
						<ul className="list-container">
							<li>Crie um perfil e comente todas as notícias</li>
							<li>Avalie e denuncie FakeNews</li>
							<li>
								Tenha mais vantagens em relação a quem não é
								logado
							</li>
						</ul>
					</div>

					<Button
						variant="contained"
						size="small"
						onClick={() => person()}>
						SOU GERADOR DE CONTEÚDO OU LEITOR
					</Button>
				</div>

				<div className="text-container--content">
					<div className="text-content">
						<h4>Empresa parceira</h4>
						<ul className="list-container">
							<li>Encontre jornalistas e colunistas</li>
							<li>
								Veja todas as postagens de um jornalista ou
								colunista
							</li>
							<li>
								Crie seu perfil completo e obtenha vantagens
							</li>
						</ul>
					</div>

					<Button
						variant="contained"
						size="small"
						onClick={() => enterprise()}>
						SEJA UMA EMPRESA PARCEIRA
					</Button>
				</div>
			</div>
		</TitleContainer>
  );
}

export default RegisterPage;
