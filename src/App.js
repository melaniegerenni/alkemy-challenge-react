import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetailContainer from "./components/MovieDetailContainer";
import SearchResults from "./components/SearchResults";
import Favorites from "./components/Favorites";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:movieID" element={<MovieDetailContainer />} />
        <Route path="/results/:keyword" element={<SearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
