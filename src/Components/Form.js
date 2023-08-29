import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../Context";
const Form = () => {
  const { inputVal, setInput } = useGlobalContext();
  const inputRef = useRef(null);
  function searchCocktail() {
    setInput(inputRef.current.value);
  }
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="search-form">
      <form action="" className="form-control">
        <label htmlFor="search">Enter your Favourite cocktail</label>
        <input
          id="search"
          className="search"
          type="text"
          placeholder="Enter your drink"
          value={inputVal}
          name="drink"
          ref={inputRef}
          onChange={searchCocktail}
        />
      </form>
    </div>
  );
};

export default Form;
