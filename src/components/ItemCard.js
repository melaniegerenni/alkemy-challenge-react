import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCard = (props) => {
    const {movie} = props;
    const {title, overview, poster_path} = movie;
  return (
    <Card className='m-3'>
      <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + poster_path} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {overview.substring(0, 100) + "..."}
        </Card.Text>
        <Button variant="warning">More info</Button>
      </Card.Body>
    </Card>
  )
}

export default ItemCard