import {createContext, useState} from 'react';

export const GlobalContext = createContext("");

const GlobalContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);

  return (
    <GlobalContext.Provider value={{loading, setLoading}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider