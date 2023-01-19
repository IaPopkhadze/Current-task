import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation/Navigation";
import MostSolidProduct from "./components/MostSolid/MostSolidProduct";
import { createContext, useState } from "react";

export const useProps = createContext(null);

function App() {
  const [mostSolidId, setMostSolidId] = useState(null);
  return (
    <useProps.Provider value={{mostSolidId, setMostSolidId}}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/mostsolidproducts" element={<MostSolidProduct />} />
        </Routes>
      </Router>{" "}
    </useProps.Provider>
  );
}

export default App;
