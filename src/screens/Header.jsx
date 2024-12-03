import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import imgPrueba from "../assets/IMGPRUEBA.png";
import portada from "../assets/portada Original.jpg";
import "../styles/Header.css";

function Header({ headerData }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container style={{ maxWidth: "100%", padding: "0px", margin: "0px" }} id="inicio">
      <div className="header">
        <div className="headerTop" style={{ backgroundPosition: scrolling ? 'center top' : 'center center' }}>
          <img
            src={portada}
            alt="Portada"
            style={{
              transform: scrolling ? "scale(1.1)" : "scale(1)", /* Se escala la imagen cuando el navbar es fijo */
            }}
          />
        </div>
        <div className={`headerBottom ${scrolling ? "header-scrolling" : ""}`} id="quienessomos">
          <div className="headerLeft">
            <div className="headerPosition">
              <div className="card">
                <img src={imgPrueba} alt="prueba" />
              </div>
            </div>
          </div>
          <div className="headerRight">
            {headerData.map((data) => (
              <div className="mision-vision" key={data.id}>
                <h1>{data.title}</h1>
                <hr />
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
