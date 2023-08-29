import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputVal, setInput] = useState("");
  const fetchData = async (url) => {
    try {
      setLoading(true);
      const data = await fetch(url);
      setError(false);
      const response = await data.json();
      if (response.drinks === null) {
        setError(true);
      }
      setCocktails(response.drinks);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`;
    fetchData(url);
  }, [inputVal]);
  return (
    <AppContext.Provider
      value={{ cocktails, loading, inputVal, setInput, error }}
    >
      {children}
    </AppContext.Provider>
  );
};

///custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
