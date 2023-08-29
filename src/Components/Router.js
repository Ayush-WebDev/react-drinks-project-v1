import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Error from "../Pages/Error";
import CocktailDetails from "./CocktailDetails";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="cocktails/:cocktailId" element={<CocktailDetails />}></Route>
    </Routes>
  );
};
export default Router;
