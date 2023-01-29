import {createContext, useState, useEffect} from 'react';

export const GlobalContext = createContext("");

const GlobalContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [favs, setFavs] = useState([]);

    useEffect(() => {
      const favsLocal = JSON.parse(localStorage.getItem('favs'));
      if(favsLocal){
          setFavs(favsLocal);
      }
      // eslint-disable-next-line
    }, []);

  return (
    <GlobalContext.Provider value={{loading, favs, setLoading, setFavs}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider