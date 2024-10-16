import { useState, useEffect } from "react";
import Navbars from "./components/Navbar";
import Header from "./components/Header";
import Catalogue from "./components/Catalogue";
import ValuesOur from "./components/ValuesOur";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { valuesOur, productos } from "./data/data";

function App() {
  const [windowDimension, setWindowDimension] = useState({
    innerWidth: window.innerWidth,
  });
  const [renderProduct, setRenderProduct] = useState(15);

  const detectSize = () => {
    setWindowDimension({ innerWidth: window.innerHeight });
  };

  useEffect(() => {
    console.log(windowDimension);
    window.addEventListener("resize", detectSize);
    return () => window.removeEventListener("resize", detectSize);
  }, [windowDimension]);

  return (
    <>
      <Navbars />
      <Header windowDimension={windowDimension} />
      <ValuesOur valuesOur={valuesOur} />
      <Catalogue productos={productos} renderProduct={renderProduct} setRenderProduct={setRenderProduct}/>
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
