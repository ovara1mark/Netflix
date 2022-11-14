import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  BrowseByLanguagesAdults,
  SignIn,
  HomeAdults,
  LandingPage,
  MoviesAdults,
  MyListAdults,
  NewAndPopularAdults,
  TvShowsAdults,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/homeadults" element={<HomeAdults />} />
        <Route exact path="/tvshowsadults" element={<TvShowsAdults />} />
        <Route exact path="/moviesadults" element={<MoviesAdults />} />
        <Route
          exact
          path="/newandpopularadults"
          element={<NewAndPopularAdults />}
        />
        <Route exact path="/mylistadults" element={<MyListAdults />} />
        <Route
          exact
          path="browsebylanguages"
          element={<BrowseByLanguagesAdults />}
        />
        <Route exact path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
