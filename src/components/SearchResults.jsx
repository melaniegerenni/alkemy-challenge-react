import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";

//Components
import List from "./List";


const SearchResults = () => {
  const { keyword } = useParams();
  const { results, getResults } = useSearch();

  useEffect(() => {
    getResults(keyword);
    // eslint-disable-next-line
  }, [keyword]);

  return (
    <>
      {results && <List headerTxt={`Search results: ${keyword}`} moviesArray={results} />}
    </>
  );
};

export default SearchResults;
