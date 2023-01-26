import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const LoadSpinner = () => {
  return (
    <Container fluid className="d-flex justify-content-center p-5">
      <Spinner animation="grow" className="m-5" />
    </Container>
  );
};

export default LoadSpinner;
