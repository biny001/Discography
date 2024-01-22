import { useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataStart } from "../redux/features/musicDataSlice";
import Discover from "../components/Discover";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  width: 100%;
  height: 100%;
`;

function Home() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.music);

  useEffect(() => {
    console.log("Component mounted, dispatching action");
    dispatch(fetchDataStart());
  }, [dispatch]);

  console.log(data, isLoading);
  return (
    <Container>
      <Discover data={data} />
    </Container>
  );
}

export default Home;
