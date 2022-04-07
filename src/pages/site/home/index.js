import { NavBar, Footer, Main } from "../components";
import styled from "styled-components";

function Home() {
  return (
    <Wrapper>
      <NavBar />
      <Main />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
`;

export default Home;
