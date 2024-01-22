import { Outlet } from "react-router-dom";

import styled from "@emotion/styled";
import Info from "./Info";
import SideBar from "./Sidebar";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
  overflow-x: hidden;
  overflow-y: hidden;
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
  overflow-y: auto;
  max-height: 100vh;
  position: relative;
`;

function AppLayout() {
  // Toggle the state based on some condition
  // const [showInfo, setShowInfo] = useState(false);
  // const handleToggleInfo = () => {
  //   setShowInfo(!showInfo);
  // };

  return (
    <Container>
      <SideBar />
      <Main showInfo={false}>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
        <Info showInfo={false} />
      </Main>
    </Container>
  );
}

export default AppLayout;
