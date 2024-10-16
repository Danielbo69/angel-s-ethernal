import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Catalogue({ productos }) {
  return (
    <Container style={{padding: '3rem'}}>
      <Row className="w-100 d-flex justify-content-between" style={{paddingBottom: '2rem', paddingTop: '2rem'}}>
        <Col className="d-flex justify-content-end" lg={3}>
          <h1 style={{ borderBottom: "3px solid #4f8b33", fontWeight: 'bold'}}>Catalogo</h1>
        </Col>
        <Col className="d-flex justify-content-end" lg={8}>
          <button>Todos</button>
          <button>Corporal</button>
          <button>Suplementos</button>
        </Col>
      </Row>
      <Row className="catalogue">
        {productos.map((producto) => (
          <div className="card" key={producto.id}>
            <img src={producto.image} alt={producto.name} />
            <h5>{producto.name}</h5>
            <p>{producto.type}</p>
          </div>
        ))}
      </Row>
    </Container>
  );
}

export default Catalogue;
