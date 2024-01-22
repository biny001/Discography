import styled from "@emotion/styled";

import Discover from "../components/Discover";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  width: 100%;
`;

function Home() {
  return (
    <Container>
      <Discover />
    </Container>
  );
}

export default Home;
