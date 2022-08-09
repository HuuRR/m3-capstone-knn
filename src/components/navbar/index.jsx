import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "../../contexts/NewsContext";
import { StyledHeaderList } from "../header/style";
export const NavButtons = () => {

  const { setFilter }  = useContext(NewsContext)

  const navigate = useNavigate();

  function handleGoToHome(){
    navigate("/")
    setFilter("todos")
  }

  function handleClick(type) {
    if(type==="todos"){
      setFilter("todos")
    }else{  
      setFilter(type)
    }
  }
  return (
    <StyledHeaderList role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" onClick={handleGoToHome}>
          Home
        </Link>
        <Link underline="hover" color="inherit" onClick={()=>handleClick("saúde")}>
          Saúde
        </Link>
        <Link underline="hover" color="inherit" onClick={()=>handleClick("tecnologia")}>
          Tecnologia
        </Link>
        <Link underline="hover" color="inherit" onClick={()=>handleClick("esporte")}>
          Esporte
        </Link>
        <Link underline="hover" color="inherit" onClick={()=>handleClick("entretenimento")}>
          Entretenimento
        </Link>
        <Link underline="hover" color="inherit" onClick={()=>handleClick("gastronomia")}>
          Gastronomia
        </Link>
        <Link underline="hover" color="inherit" onClick={()=>handleClick("todos")}>
          Todos
        </Link>
      </Breadcrumbs>
    </StyledHeaderList>
  );
};
