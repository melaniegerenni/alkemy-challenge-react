import axios from "axios";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";



const useMovieDetail = () => {
    const [movieDetail, setMovieDetail] = useState(null);
    const {setLoading} = useContext(GlobalContext);

    const getMovieDetail = async (movieID) => {
        setLoading(true);
        try {
            const endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=bf6d1d72665456cf14827b416c3d63f1&language=en-US`;
            const response = await axios.get(endpoint);
            setMovieDetail(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

  return {getMovieDetail, movieDetail}
}

export default useMovieDetail