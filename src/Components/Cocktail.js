import React from "react";
import { Link } from "react-router-dom";
const Cocktail = ({
  idDrink,
  strDrink,
  strAlcoholic,
  strGlass,
  strDrinkThumb,
}) => {
  return (
    <div className="cocktail">
      <img src={strDrinkThumb} alt={strDrink} />
      <footer className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link
          to={`cocktails/${strDrink.toLowerCase()}-${idDrink}`}
          className="btn-primary"
        >
          Details
        </Link>
      </footer>
    </div>
  );
};

export default Cocktail;
