import Home from "./pages/Home";
import Panel from "./pages/Panel";
import Data from "./pages/Data";
import Products from "./pages/Products";
import Clients from "./pages/Clients";

import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <div className="main d-flex flex-column">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Panel />} path="/panel"></Route>
        <Route element={<Data />} path="/data"></Route>
        <Route element={<Products />} path="/products"></Route>
        <Route element={<Clients />} path="/clients"></Route>
      </Routes>
    </div>
  );
};

export default Content;
