import {useEffect} from 'react';
import useMovies from '../hooks/useMovies';
import List from './List';


const MovieList = () => {

    const {movies, getMovies} = useMovies();

    useEffect(() => {
        getMovies()
        // eslint-disable-next-line
      }, []);

  return (
    <>
    {movies && <List headerTxt="New movies" moviesArray={movies} />}
    </>
  )
}

export default MovieList