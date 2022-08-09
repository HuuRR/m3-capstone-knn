import { StyledUserCard, StyledUserOptions, SuccessMessage } from "./style";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

function UserEdit() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const [success, setSuccess] = useState();

  const changeType = {
    type: "content creator",
  };

  function updateTypeUser(id){
    const token = JSON.parse(localStorage.getItem("@KNN-TOKEN"));
    try {
      api.patch(`users/${id}`, changeType, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setUser({ type:"content creator", ...user})
      setSuccess(true)
      setTimeout(()=>{
        setSuccess(false)
      },2000)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StyledUserCard>
      <p>Olá {user?.name}, você é somente um leitor!</p>

      <StyledUserOptions>
          <Button
            type="submit"
            sx={{ width: 150 }}
            variant="contained"
            onClick={() =>{
              updateTypeUser(user?.id)
              setTimeout(()=>{
                navigate("/profile/edit")
              }, 2000)
            }
            }
          >
            Vire um Criador de conteúdo
          </Button>
          
      </StyledUserOptions>
      {
            success ? (
              <SuccessMessage>
                <p>Você foi atualizado para Criador de Conteúdo!</p>
              </SuccessMessage>
            ) : 
            (
              null
            )
      }
    </StyledUserCard>
  );
}
export default UserEdit;
