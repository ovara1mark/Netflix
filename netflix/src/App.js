import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { BrowseByLanguagesAdults, Characters, HomeAdults, HomeKids, LandingPage, MoviesAdults, MoviesKids, MyListAdults, MyListKids, NewAndPopularAdults, NewAndPopularKids, TvShowsAdults, TvShowsKids } from "./components/Pages";
import { BrowseByLanguagesKids } from "./components/Pages/BrowseByLanguagesKids";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/" element={<HomeAdults />} />
        <Route exact path="/homekids" element={<HomeKids />} />
        <Route exact path="/tvshowsadults" element={<TvShowsAdults />} />
        <Route exact path="/tvshowskids" element={<TvShowsKids />} />
        <Route exact path="/moviesadults" element={<MoviesAdults />} />
        <Route exact path="/movieskids" element={<MoviesKids />} />
        <Route exact path="/newandpopularadults" element={<NewAndPopularAdults />} />
        <Route exact path="/newandpopularkids" element={<NewAndPopularKids />} />
        <Route exact path="/mylistadults" element={<MyListAdults />} />
        <Route exact path="/mylistkids" element={<MyListKids />} />
        <Route exact path="browsebylanguages" element={<BrowseByLanguagesAdults />} />
        <Route exact path="/browsebylanguageskids" element={<BrowseByLanguagesKids />} />
        <Route exact path="/characters" element={<Characters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
