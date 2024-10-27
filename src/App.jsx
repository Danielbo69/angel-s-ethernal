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
import { headerData, valuesOur, productos, contact, links } from "./data/data";

function App() {
  const [renderProduct, setRenderProduct] = useState(15);

  const [windowDimension, setWindowDimension] = useState({
    innerWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowDimension({ innerWidth: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => window.removeEventListener("resize", detectSize);
  }, [windowDimension]);

  return (
    <>
      <Navbars links={links} />
      <Header headerData={headerData} />
      <ValuesOur valuesOur={valuesOur} />
      <Catalogue
        productos={productos}
        renderProduct={renderProduct}
        setRenderProduct={setRenderProduct}
        windowDimension={windowDimension}
      />
      <Events />
      <Contact contact={contact} />
      <Footer />
    </>
  );
}

export default App;
