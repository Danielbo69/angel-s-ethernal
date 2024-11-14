import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <div className="image">
          <img src={logo} alt="logo" />
        </div>
        <div className="content-enlaces-redes">
          <div className="enlaces">
            <h6>Inicio</h6>
            <h6>Quienes Somos</h6>
            <h6>Catalogo</h6>
            <h6>Aliados</h6>
            <h6>Eventos</h6>
            <h6>Contactos</h6>
          </div>
          <div className="redes-condiciones">
            <div className="redes">
              <p>iconos de redes</p>
            </div>
            <div className="terminos&politica">
              <p> Terminos y condiciones</p>
              <p>Politica de privacidad</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>
            Angels Eternal, C.A. RIF.J-00000000-0 ©2024. Todos los derechos
            reservados
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
