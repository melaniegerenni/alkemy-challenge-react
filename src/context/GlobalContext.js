import axios from 'axios';
import {createContext, useState} from 'react';

export const GlobalContext = createContext("");

const GlobalContextProvider = ({children}) => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const getMovies = async () => {
        setLoading(true);
        try {
            const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=bf6d1d72665456cf14827b416c3d63f1&language=en-US&page=1";
            const response = await axios.get(endPoint);
            setMovies(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <GlobalContext.Provider value={{loading, movies, getMovies}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider