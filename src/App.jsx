import Navbars from "./components/Navbar";
import Header from "./components/Header";
import Catalogue from "./components/Catalogue";
import ValuesOur from "./components/ValuesOur";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <>
      <Navbars />
      <Header />
      <ValuesOur />
      <Catalogue />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
