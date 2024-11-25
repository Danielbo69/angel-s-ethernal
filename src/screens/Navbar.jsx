import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";
import '../styles/Navbar.css'

function Navbars({ links }) {
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
            <Navbar.Brand>
              <img src={logo} style={{ width: "100px" }} alt="logo" />
            </Navbar.Brand>
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
