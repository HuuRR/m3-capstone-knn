import { Route, Routes } from "react-router-dom";
import CompanyRegisterPage from "../pages/company -register";
import EditNewsPage from "../pages/editNewsPage";
import CreateNewsPage from "../pages/CreateNewsPage";
import { Homepage } from "../pages/homepage";
import JournalistProfilePage from "../pages/perfil-jornalista";
import PersonRegisterPage from "../pages/person-register";
import RegisterPage from "../pages/register";
import { SingleArticlePage } from "../pages/singleArticlePage";
import LoginPage from "../pages/login";
import CreatorCompanyEditPage from "../pages/creatorCompanyEditPage";
import AllJournalists from "../pages/todos-jornalistas";
import { MyNewsPage } from "../pages/myNewsPage";

function Paths() {
  return (
    <Routes>
      <Route exact path={"/"} element={<Homepage />}></Route>
      <Route exact path={"/login"} element={<LoginPage />} />
      <Route exact path={"/register"} element={<RegisterPage />} />
      <Route exact path={"/register/person"} element={<PersonRegisterPage />} />
      <Route exact path={"/mynews/edit/:id"} element={<EditNewsPage />} />
      <Route
        exact
        path={"/register/enterprise"}
        element={<CompanyRegisterPage />}
      />
      <Route exact path={"/news/:id"} element={<SingleArticlePage />} />
      <Route exact path={"/profile"} element={<JournalistProfilePage />} />
      <Route
        exact
        path={"/profile/edit"}
        element={<CreatorCompanyEditPage />}
      />
      <Route exact path={"/mynews/create"} element={<CreateNewsPage />} />
      <Route exact path={"/content-creators"} element={<AllJournalists />} />
      <Route exact path={"/mynews"} element={<MyNewsPage/>} />
    </Routes>
  );
}

export default Paths;
