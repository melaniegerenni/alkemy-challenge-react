import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

const useSearch = () => {
    const {setLoading} = useContext(GlobalContext);
    const [results, setResults] = useState([]);

    const getResults = async (keyword) => {
        setLoading(true);
        try {
            const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=bf6d1d72665456cf14827b416c3d63f1&language=en-US&page=1&include_adult=false&query=${keyword}`;
            const response = await axios.get(endPoint);
            setResults(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    

  return {results, getResults}
}

export default useSearch