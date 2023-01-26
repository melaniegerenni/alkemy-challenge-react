import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail/:movieID" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
