import { GlobalContext } from "../context/GlobalContext";
import { Navigate } from "react-router-dom";

//Hooks
import { useContext } from "react";

//Components
import ItemCard from "./ItemCard";
import LoadSpinner from "./LoadSpinner";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const List = (props) => {
  const { loading } = useContext(GlobalContext);
  const { headerTxt, noMsg, moviesArray } = props;
  const token = sessionStorage.getItem("token");

  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : loading ? (
        <LoadSpinner />
      ) : (
        <>
          <Container fluid className="px-5 mt-3">
            <h2 className="text-center">{headerTxt}</h2>
            <Row>
              {moviesArray.length === 0 ? (
                <p className="text-center">{noMsg || "No results"}</p>
              ) : (
                moviesArray.map((movie) => (
                  <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                    <ItemCard movie={movie} />
                  </Col>
                ))
              )}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default List;
