import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import ItemCard from "./ItemCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const List = () => {
  const token = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=bf6d1d72665456cf14827b416c3d63f1&language=en-US&page=1";
    axios
    .get(endPoint)
    .then((response) => setMovies(response.data.results));
  }, [setMovies]);

  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : (
        <>
        <Container fluid className="p-5">
          <h2 className="text-center">New Movies</h2>
          <Row>
            {movies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <ItemCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Container>
        </>
      )}
    </>
  );
};

export default List;
