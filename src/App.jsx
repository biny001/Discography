import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Playlist from "./pages/Playlist";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./components/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { IconContext } from "react-icons";

// https://my-json-server.typicode.com/biny001/fakejson/songs

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <IconContext.Provider value={{ style: { verticalAlign: "middle" } }} />
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/search"
              element={<Search />}
            />
            <Route
              path="/favorites"
              element={<Favorites />}
            />
            <Route
              path="/playlist"
              element={<Playlist />}
            />
            <Route
              path="*"
              element={<PageNotFound />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
