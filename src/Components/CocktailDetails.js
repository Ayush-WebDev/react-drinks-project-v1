import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "./Loading";
const CocktailDetails = () => {
  const { cocktailId } = useParams();
  const idCocktail = parseInt(cocktailId.split("-")[1]);
  const [currentCocktail, setCurrentCocktail] = useState({});
  const [errorCocktail, setErrorCocktail] = useState(false);
  const [loading, setLoading] = useState(false);
  const fetchCocktail = async () => {
    try {
      setLoading(true);
      setErrorCocktail(false);
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`;
      const data = await fetch(url);
      const response = await data.json();
      if (response.drinks !== null) {
        setCurrentCocktail(response.drinks[0]);
        setLoading(false);
      } else {
        setCurrentCocktail(null);
      }
    } catch (error) {
      setErrorCocktail(true);
    }
  };
  useEffect(() => {
    fetchCocktail();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (currentCocktail && !errorCocktail) {
    const {
      strDrinkThumb: image,
      strDrink: drink,
      strCategory: category,
      strGlass: glass,
      strIngredient1,
      strIngredient2,
    } = currentCocktail;
    return (
      <div className="section">
        <div className="cocktails-center">
          <img src={image} alt={drink} />
          <div>
            <h2>Name: {drink}</h2>
            <h3>Category: {category}</h3>
            <h3>Glass: {glass}</h3>
            <h3>Ingredient: {strIngredient1}</h3>
            <h3>Ingredient: {strIngredient2}</h3>
            <Link className="btn" to="/">
              Go back to home
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>There was an error.</h2>
      </div>
    );
  }
};

export default CocktailDetails;
