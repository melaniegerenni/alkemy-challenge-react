
import Button from "react-bootstrap/Button";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();


  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();

    if (keyword.length < 4) {
        MySwal.fire({
            title: <p>Minimun 4 characters</p>,
            confirmButtonColor: "#000"
          });
    } else {
        e.target.keyword.value = '';
        navigate(`/results/${keyword}`);
    }
  };

  return (
    <form className="d-flex align-items-center gap-3" onSubmit={submitHandler}>
      <label>
        <input
          type="text"
          name="keyword"
          placeholder="Search movie"
          className="rounded-2 border-0 p-1"
        />
      </label>

      <Button type="submit" variant="dark" size="sm">
        <FaSearch />
      </Button>
    </form>
  );
};

export default Search;
