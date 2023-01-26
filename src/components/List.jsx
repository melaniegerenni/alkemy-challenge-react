import { GlobalContext } from "../context/GlobalContext";
import { Navigate } from "react-router-dom";

//Hooks
import { useEffect, useContext } from "react";
import useMovies from "../hooks/useMovies";

//Components
import ItemCard from "./ItemCard";
import LoadSpinner from "./LoadSpinner";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const List = () => {
  const {loading} = useContext(GlobalContext);
  const {movies, getMovies} = useMovies();
  const token = localStorage.getItem('token');
  

  useEffect(() => {
    getMovies()
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : loading ? (
        <LoadSpinner />
      ) : (
        <>
        <Container fluid className="px-5 mt-3">
          <h2 className="text-center">New Movies</h2>
          <Row>
            {movies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}  >
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
