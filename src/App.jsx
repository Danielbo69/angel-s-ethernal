import { useState, useEffect } from "react";
import Navbars from "./screens/Navbar";
import Header from "./screens/Header";
import Catalogue from "./screens/Catalogue";
import ValuesOur from "./screens/ValuesOur";
import Events from "./screens/Events";
import Contact from "./screens/Contact";
import Footer from "./screens/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  headerData,
  valuesOur,
  productos,
  contact,
  links,
  droguerias,
} from "./data/data";

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
      <Events droguerias={droguerias} />
      <Contact contact={contact} />
      <Footer />
    </>
  );
}

export default App;
