import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "./SideBar";
import styled from "@emotion/styled";
import Info from "./Info";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  overflow-x: hidden;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: ${({ showInfo }) =>
    showInfo ? "3fr 1fr" : "3.5fr 0fr"};
  transition: all 0.5s ease-in-out;
`;

const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function AppLayout() {
  const [showInfo, setShowInfo] = useState(true);

  // Toggle the state based on some condition
  const handleToggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Container>
      <SideBar />
      <Main showInfo={showInfo}>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
        <Info showInfo={showInfo} />
      </Main>
    </Container>
  );
}

export default AppLayout;
