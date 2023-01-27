import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useParams, Navigate } from "react-router-dom";

//Custom hooks
import useMovieDetail from "../hooks/useMovieDetail";

//Components
import LoadSpinner from "./LoadSpinner";
import MovieDetail from "./MovieDetail";

const MovieDetailContainer = () => {
  const {loading} = useContext(GlobalContext);
  const { movieID } = useParams();
  const { getMovieDetail, movieDetail } = useMovieDetail();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    getMovieDetail(movieID);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : (loading ? (
        <LoadSpinner />
      ) : (
        movieDetail && <MovieDetail movieDetail={movieDetail} />
      ))}
    </>
  );
};

export default MovieDetailContainer;