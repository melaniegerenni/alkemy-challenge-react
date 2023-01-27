
//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieDetail = (props) => {
  const {movieDetail} = props;
  const { poster_path, title, overview, genres, release_date } = movieDetail;

  return (
        <Container fluid className="p-3">
          <Row>
            <Col xs={3}>
              <img className="w-100" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
              </Col>
              <Col xs={9}>
                <h2>{title}</h2>
                {genres.map(({name, id}) => (
                  <span key={id} className="fst-italic me-3 text-secondary">{name}</span>
                ))}
                <p className="mt-3">{overview}</p>
                <p className="fw-bold">Release date: {release_date}</p>                
              </Col>
          </Row>
        </Container>
  );
};

export default MovieDetail;
