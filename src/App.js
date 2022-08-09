import { Header } from "./components/header";
import { Main } from "./components/main";
import Paths from "./routes";
import { StyledGlobal } from "./style";

function App() {
  return (
    <>
      <StyledGlobal />
      <Header />     
      <Main>
        <Paths />
      </Main>
    </>
  );
}

export default App;
