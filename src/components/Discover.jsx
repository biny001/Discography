// import styled from "@emotion/styled";
// import SongCard from "./SongCard";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchDataStart } from "../redux/features/musicDataSlice";
// import Loader from "./Loader";

// const DiscoverContainer = styled.div`
//   display: grid;

//   grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
//   gap: 24px;
//   padding: 16px;

//   justify-content: center;

//   @media (min-width: 600px) {
//     grid-template-columns: repeat(
//       2,
//       minmax(200px, 1fr)
//     ); /* Two columns for screens wider than 600px */
//   }

//   @media (min-width: 900px) {
//     grid-template-columns: repeat(
//       3,
//       minmax(200px, 1fr)
//     ); /* Three columns for screens wider than 900px */
//   }

//   @media (min-width: 1200px) {
//     grid-template-columns: repeat(
//       4,
//       minmax(200px, 1fr)
//     ); /* Four columns for screens wider than 1200px */
//   }
// `;

// function Discover() {
//   const dispatch = useDispatch();
//   const { data } = useSelector((store) => store.music);
//   const [dataFetched, setDataFetched] = useState(false);

//   useEffect(() => {
//     if (!dataFetched) {
//       dispatch(fetchDataStart());
//       setDataFetched(true);
//     }
//   }, [dispatch, setDataFetched, dataFetched]);
//   return (
//     <>
//       <h1 style={{ textAlign: "left", width: "100%", fontSize: "24px" }}>
//         From all around the world
//       </h1>
//       <DiscoverContainer>
//         {!dataFetched ? (
//           // Render a loading state while data is being fetched
//           <Loader />
//         ) : (
//           // Map through the data and render SongCard components
//           data.map((song) => (
//             <SongCard
//               key={song.key}
//               song={song}
//               isLoading={false}
//             />
//           ))
//         )}
//       </DiscoverContainer>
//     </>
//   );
// }

// export default Discover;
function Discover() {
  return <div>home</div>;
}

export default Discover;
