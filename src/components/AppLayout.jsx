import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100dvh;
  display: grid;
  grid-template-columns: 0.5fr 3fr;
`;

function AppLayout() {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  );
}

export default AppLayout;
