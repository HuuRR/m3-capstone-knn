import { Button } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import {
  StyledAdressInfoP,
  StyledAdressP,
  StyledButtomsContainer,
  StyledEmailPhoneContainer,
  StyledH3Container,
  StyledImgNameContainer,
  StyledMoreInformationContainer,
  StyledNoInfoP,
  StyledProfileJournalistContainer,
} from "./style";
import "./style.css";

function CardJournalist() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  function editProfile() {
    navigate("/profile/edit");
  }
  return (
    <StyledProfileJournalistContainer>
      <StyledImgNameContainer>
        {user?.avatar ? (
          <figure>
            <img src={user?.avatar} alt={user?.name} />
          </figure>
        ) : (
          <div className="sem--avatar">
            <p>Adicione um Avatar</p>
          </div>
        )}
        <div>
          <h2>{user?.name}</h2>
          <h3>
            {user?.type === "content creator"
              ? "Criador de Conteúdo"
              : user?.type === "company"
              ? "Empresa Parceira"
              : user?.type === "reader" && "Leitor"}
          </h3>
        </div>
      </StyledImgNameContainer>
      <StyledEmailPhoneContainer>
        <h2>Contatos</h2>
        <StyledH3Container>
          <h3>Email:</h3>
          <p>{user?.email}</p>
        </StyledH3Container>
        <StyledH3Container>
          <h3>Telefone: </h3>
          <p>{user?.data?.phone}</p>
        </StyledH3Container>
      </StyledEmailPhoneContainer>
      <StyledMoreInformationContainer>
        <div>
          <h2>Demais informações</h2>
          <div>
            {user?.data ? (
              <>
                <StyledAdressP>Endereço: </StyledAdressP>
                <StyledAdressInfoP>
                  {user?.data?.adress.street}, {user?.data?.adress.district},
                  {user?.data?.adress.cep}, {user?.data?.adress.city} -
                  {user?.data?.adress.state}
                </StyledAdressInfoP>
              </>
            ) : (
              <StyledNoInfoP>
                Acesse á pagina de edição de perfil para completar seu cadastro.
              </StyledNoInfoP>
            )}
          </div>
        </div>
      </StyledMoreInformationContainer>
      <StyledButtomsContainer>
        <Button variant="contained" size="small" onClick={editProfile}>
          Editar Perfil
        </Button>
      </StyledButtomsContainer>
    </StyledProfileJournalistContainer>
  );
}

export default CardJournalist;
