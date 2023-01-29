import { useState, useEffect, useContext } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";

//Sweetalert
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const FavButton = (props) => {
  const { setFavs } = useContext(GlobalContext);
  const { movie } = props;
  const MySwal = withReactContent(Swal);
  const [like, setLike] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs"));
    if (favs) {
      const find = favs.find((obj) => obj.id === movie.id);
      if (find) {
        setLike(true);
      }
    }
    // eslint-disable-next-line
  }, []);

  const addFav = (movie) => {
    let favs = JSON.parse(localStorage.getItem("favs"));
    if (favs) {
      favs = [...favs, movie];
    } else {
      favs = [movie];
    }
    localStorage.setItem("favs", JSON.stringify(favs));
    setFavs(favs);
  };

  const delFav = (movie) => {
    let favs = JSON.parse(localStorage.getItem("favs"));
    const find = favs.find((obj) => obj.id === movie.id);
    const index = favs.indexOf(find);
    if (find) {
      MySwal.fire({
        title: "Are you sure you want to remove movie from favorites?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#000",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          favs.splice(index, 1);
          localStorage.setItem("favs", JSON.stringify(favs));
          setFavs(favs);
        }
      });
    }
  };

  return (
    <button
      className="bg-transparent border-0"
      onClick={() => {
        like ? delFav(movie) : addFav(movie);
        setLike(!like);
      }}
    >
      {like ? (
        <FaHeart className="fs-4 text-light animate__animated animate__heartBeat" />
      ) : (
        <FaRegHeart className="fs-4 text-light" />
      )}
    </button>
  );
};

export default FavButton;
