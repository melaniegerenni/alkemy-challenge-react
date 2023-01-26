import { useParams } from "react-router-dom";

const MovieDetail = () => {
    const {movieID} = useParams();

  return (
    <div>MovieDetail: {movieID}</div>
  )
}

export default MovieDetail