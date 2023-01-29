import { useEffect, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import useSearch from "../hooks/useSearch";

//Components
import ItemCard from "./ItemCard";
import LoadSpinner from "./LoadSpinner";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchResults = () => {
  const { loading } = useContext(GlobalContext);
  const { keyword } = useParams();
  const { results, getResults } = useSearch();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    getResults(keyword);
  }, [keyword]);

  return (
    <>
      {!token ? (
        <Navigate to="/" />
      ) : loading ? (
        <LoadSpinner />
      ) : (
        <>
          <Container fluid className="px-5 mt-3">
            <h2>
              Search results: <em>{keyword}</em>
            </h2>
            <Row>
              {results.length === 0 ? (
                <p>No results</p>
              ) : (
                results.map((movie) => (
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

export default SearchResults;
