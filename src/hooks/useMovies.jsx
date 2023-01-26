import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useMovies = () => {
    const {setLoading} = useContext(GlobalContext);
    const [movies, setMovies] = useState([]);
    const MySwal = withReactContent(Swal);

    const getMovies = async () => {
        setLoading(true);
        try {
            const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=bf6d1d72665456cf14827b416c3d63f1&language=en-US&page=1";
            const response = await axios.get(endPoint);
            setMovies(response.data.results);
            setLoading(false);
        } catch (error) {
            console.log(error);
            MySwal.fire({
                icon: "warning",
                title: <p>Ups! An error ocurred</p>,
                confirmButtonColor: "#000"
              });
        }
    }

    return {movies, getMovies}
}

export default useMovies