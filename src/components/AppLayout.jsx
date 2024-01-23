import { Outlet } from "react-router-dom";

import styled from "@emotion/styled";

import SideBar from "./Sidebar";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  overflow-x: hidden;
  overflow-y: hidden;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.div`
  /* display: grid;

  grid-template-columns: ${({ showInfo }) =>
    showInfo ? "3fr 1fr" : "3.5fr 0fr"};
  transition: all 0.5s ease-in-out; */
`;

const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  max-height: 100vh;
  position: relative;
`;

function AppLayout() {
  return (
    <Container>
      <SideBar />
      <Main showInfo={false}>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Main>
    </Container>
  );
}

export default AppLayout;
