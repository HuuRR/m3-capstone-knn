import Login from "../../components/login";
import undraw_sharing_knowledge_03vp from "../../assets/undraw_sharing_knowledge_03vp.svg";
import { Wrapper } from "./style";

function LoginPage() {
  return (
    <Wrapper>
      <Login />
      <img src={undraw_sharing_knowledge_03vp} alt="imagem da tela de login" />
    </Wrapper>
  );
}

export default LoginPage;
