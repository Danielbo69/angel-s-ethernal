import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import "../styles/Footer.css";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <div>
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
          <div className="redes" data-top="top">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i>
                <FaInstagram color="#fff" />
              </i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i>
                <FaFacebookF color="#fff" />
              </i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i>
                <FaXTwitter color="#fff" />
              </i>
            </a>
          </div>
        </div>
        <div className="content-enlaces-redes">
          <div className="enlaces">
            <a href="/">Inicio</a>
            <a href="#quienessomos">Quienes Somos</a>
            <a href="#catalogo">Catalogo</a>
            <a href="#aliados">Aliados</a>
            <a href="#eventos">Eventos</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="redes-condiciones">
            <div className="redes" data-bottom="bottom">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i>
                  <FaInstagram color="#fff" />
                </i>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i>
                  <FaFacebookF color="#fff" />
                </i>
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <i>
                  <FaXTwitter color="#fff" />
                </i>
              </a>
            </div>
            <div className="terminospolitica">
              <a href="">Terminos y condiciones</a>
              <a href="">Politica de privacidad</a>
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
