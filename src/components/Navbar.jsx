import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbars() {
  const links = [
    {
      link: "/",
      text: "Inicio",
    },
    {
      link: "/",
      text: "Quienes Somos",
    },
    {
      link: "/",
      text: "Catalogo",
    },
    {
      link: "/",
      text: "Aliados",
    },
    {
      link: "/",
      text: "Eventos",
    },
    {
      link: "/",
      text: "Contactos",
    },
  ];
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary p-0"
          style={{ height: "80px" }}
        >
          <Container style={{ height: "100%" }}>
            <Navbar.Brand href="#">Angels Ethternal</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ height: "100% !important" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Angels Ethternal
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ height: "100%" }}>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {links.map((links, index) => (
                    <Nav.Link
                      key={index}
                      href={links.link}
                      className="align-content-center background-color-black hover"
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
