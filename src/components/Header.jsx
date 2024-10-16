import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import imgPrueba from "../assets/IMGPRUEBA.png";
import portada from "../assets/portada Original.jpg";

function Header({windowDimension}) {
  

  const data = [
    {
      id: 1,
      title: "Misión",
      description:
        "Ser la marca líder en suplementos, vitaminas y productos de cuidado corporal en Venezuela, con la más alta calidad promoviendo la salud y bienestar de las personas, inspirándolas a descubrir y cultivar su belleza integral.",
    },
    {
      id: 2,
      title: "Visión",
      description:
        "Proveemos salud y belleza a toda Venezuela con suplementos, vitaminas y productos de cuidado corporal importados y de alta calidad.",
    },
  ];

  const positionAbsolute = {
    position: "absolute",
    marginTop: "-120px",
  };
  const porsitionBlock = {
    position: "relative",
    marginTop: "0px",
  };

  return (
    <Container className="header">
      <Row>
        <Col className="headerTop" lg={12}>
          <img src={portada} alt="Portada"/>
        </Col>
      </Row>
      <Row style={{ padding: "50px" }}>
        <Col className="headerLeft" lg>
          <div
            style={
              windowDimension.innerWidth < 650
                ? porsitionBlock
                : positionAbsolute
            }
          >
            <div className="card">
              <img
                style={{ width: "100%", height: "100%", borderRadius: "15px" }}
                src={imgPrueba}
                alt="prueba"
              />
            </div>
          </div>
        </Col>
        <Col className="headerRight" lg>
          {data.map((data) => (
            <div key={data.id}>
              <h1>{data.title}</h1>
              <hr />
              <p>{data.description}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
