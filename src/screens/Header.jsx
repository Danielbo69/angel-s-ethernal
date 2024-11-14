import Container from "react-bootstrap/Container";
import imgPrueba from "../assets/IMGPRUEBA.png";
import portada from "../assets/portada Original.jpg";

function Header({headerData }) {

  return (
    <Container style={{maxWidth: '100%', padding: '0px', margin: '0px'}}>
      <div className="header">
        <div className="headerTop">
          <img src={portada} alt="Portada" />
        </div>
        <div className="headerBottom">
          <div className="headerLeft">
            <div className="headerPosition">
              <div className="card">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "15px" }}
                  src={imgPrueba}
                  alt="prueba"
                />
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
