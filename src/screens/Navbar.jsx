import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbars({ links }) {
  const [scrolling, setScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Actualiza el tamaño de la ventana
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Función para manejar el cambio de estado cuando hacemos scroll
  const handleScroll = () => {
    if (window.scrollY > 80) {
      // El navbar se fija después de 100px de scroll
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // useEffect para agregar el evento de scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiar el evento cuando se desmonte el componente
    };
  }, []);

  // Función para manejar el scroll suave
  const scrollToSection = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Determinar el tipo de Navbar según el tamaño de la ventana
  const getNavbarClass = () => {
    if (windowWidth < 576) return "navbar-mobile"; // Móvil
    if (windowWidth < 992) return "navbar-ipad"; // iPad
    return "navbar-desktop"; // Escritorio
  };

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`bg-body-tertiary p-0 ${scrolling ? "fixed-top" : ""} ${getNavbarClass()}`} // Estilo según el tamaño de la ventana y el scroll
          style={{ height: "auto" }}
        >
          <Container style={{ height: "100%" }}>
            <Navbar.Brand>
              <img src={logo} style={{ width: "120px" }} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "300px", height: "100% !important" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} style={{ width: "120px" }} alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {links.map((links, index) => (
                    <Nav.Link
                      key={index}
                      href="#"
                      onClick={() => scrollToSection(links.link)}
                      className="align-content-center"
                    >
                      {links.text}
                    </Nav.Link>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbars;
