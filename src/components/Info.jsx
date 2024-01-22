import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  background-color: #205295; /* Set your preferred background color */
  opacity: ${({ showInfo }) => (showInfo ? 1 : 0)};
  transition: opacity 0.5s, margin-left 0.5s;
  display: ${({ showInfo }) => (showInfo ? "flex" : "none")};
  margin-left: ${({ showInfo }) => (showInfo ? "0" : "100%")};
`;

function Info({ showInfo }) {
  return <Container showInfo={showInfo}>hello</Container>;
}

export default Info;
