import { useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Navigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoadSpinner from "./LoadSpinner";

const List = () => {
  const {loading, movies, getMovies} = useContext(GlobalContext);
  const token = localStorage.getItem("token");
  

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
