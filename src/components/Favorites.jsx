import { useEffect, useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";
import ItemCard from "./ItemCard";

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Favorites = () => {
    const {favs} = useContext(GlobalContext)

  useEffect(() => {
  }, [favs]);

  return (
    <div>
      <Container fluid className="px-5 mt-3">
        <h2 className="text-center">My favorite movies</h2>
        <Row>
          {favs.map((movie) => (
            <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <ItemCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Favorites;
