import { useEffect, useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";
import List from "./List";

const Favorites = () => {
    const {favs} = useContext(GlobalContext)

  useEffect(() => {
  }, [favs]);

  return (
    <>
    {favs && <List headerTxt="My favorite movies" noMsg="No favorites movies yet" moviesArray={favs} />}
    </>
  );
};

export default Favorites;
