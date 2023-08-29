import React from "react";
import Loading from "../Components/Loading";
import Cocktail from "../Components/Cocktail";
import Form from "../Components/Form";
import { useGlobalContext } from "../Context";
const Home = () => {
  const { cocktails, loading, error } = useGlobalContext();
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <Form />
        {(!cocktails || error) && (
          <div className="section" style={{ textAlign: "center" }}>
            <h3 style={{ textAlign: "center" }}>
              No cocktails match your search.
            </h3>
          </div>
        )}
        {!error && (
          <>
            <h2 className="section-title">Cocktails</h2>
            <div className="cocktails-center">
              {cocktails.map((cocktail, index) => {
                return <Cocktail {...cocktail} key={index} id={cocktail.id} />;
              })}
            </div>
          </>
        )}
      </>
    );
  }
};

export default Home;
