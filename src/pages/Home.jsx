import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataStart } from "../redux/features/musicDataSlice";

function Home() {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.music);

  useEffect(() => {
    console.log("Component mounted, dispatching action");
    dispatch(fetchDataStart());
  }, [dispatch]);

  console.log(data, isLoading);
  return <div>Home</div>;
}

export default Home;
