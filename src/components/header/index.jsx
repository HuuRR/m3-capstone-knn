import { Button} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { NavButtons } from "../navbar";
import { StyledHeader } from "./style";
import MenuDrawer from "../MenuDrawer";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import BasicMenu from "../userLogedMenu";
import logo_knn from "../../assets/logo_knn.png";

import { StyledHeaderButtons } from "./style";
export const Header = () => {

  const { user, setUser  } = useContext(UserContext);
  const navigate = useNavigate();

  function login() {
    navigate("/login");
  }
  function logOut() {
    navigate("/login");
    setUser(null)
    localStorage.removeItem("@KNN-TOKEN");
    localStorage.removeItem("@KNN-ID");
  }
  function register() {
    navigate("/register");
  }
  function home() {
    navigate("/");
  }
  function profile() {
    navigate("/profile");
  }
  function mynews() {
    navigate("/mynews");
  }
  function createNews() {
    navigate("/mynews/create");
  }
  function contentCreators() {
    navigate("/content-creators");
  }
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 800 ? true : false,
  });
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 800px)");
    mediaQuery.addEventListener("change", () => setMQuery(mediaQuery));
  }, []);

  return (
    <StyledHeader>
      {mQuery && !mQuery.matches ? (
        <>
          <MenuDrawer login={login} register={register} logOut={logOut} createNews={createNews} contentCreators={contentCreators} profile={profile} />
          <div className="logo--cont" >
            <img src={logo_knn} alt="Kenzie News Network"/>
            <h1>Kenzie News Network</h1>
          </div>
        </>
      ) : (
        <>
          <div className="logo--cont" >
            <img src={logo_knn} alt="Kenzie News Network" />
            <h1>Kenzie News Network</h1>
          </div>
          <NavButtons />
          <Box
            sx={{
              "& button": {
                m: 1,
                borderRadius: 8,
                backgroundColor: "#ffff",
                color: "black",
                margin: "0px",
                width: 200,
              },
            }}
          >
            {user ? (
              <BasicMenu
              logOut={logOut}
              contentCreators={contentCreators}
              mynews={mynews}
              createNews={createNews}
              profile={profile}
              home={home}
            />
            ) : (
              <StyledHeaderButtons>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => login()}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => register()}
                >
                  Cadastro
                </Button>
              </StyledHeaderButtons>
            )}
          </Box>
        </>
      )}
    </StyledHeader>
  );
};
