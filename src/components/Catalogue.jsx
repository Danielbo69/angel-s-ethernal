import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Catalogue({ productos, renderProduct, setRenderProduct }) {
  const loadMoreProducts = () => {
    const numberProducts = renderProduct;
    setRenderProduct(numberProducts + 5);
  };

  return (
    <Container style={{ padding: "3rem" }}>
      <Row
        className="w-100 d-flex justify-content-between"
        style={{ paddingBottom: "2rem", paddingTop: "2rem" }}
      >
        <Col className="d-flex justify-content-end" lg={3}>
          <h1 style={{ borderBottom: "3px solid #4f8b33", fontWeight: "bold" }}>
            Catalogo
          </h1>
        </Col>
        <Col className="d-flex justify-content-end" lg={8}>
          <button>Todos</button>
          <button>Corporal</button>
          <button>Suplementos</button>
        </Col>
      </Row>
      <Row className="catalogue">
        {productos.slice(0, renderProduct).map((producto, index) => (
          <div
            className={`card ${
             index >= renderProduct ? "clipped blurred-bottom" : ""
            }`}
            key={producto.id}
          >
            {" "}
            <img src={producto.image} alt={producto.name} />
            <h5>{producto.name}</h5>
            <p>{producto.type}</p>
          </div>
        ))}
      </Row>
      <Row className="catalogueButton">
        {renderProduct < productos.length && (
          <button className="button" onClick={() => loadMoreProducts()}>
            Ver más productos
          </button>
        )}
      </Row>
    </Container>
  );
}

export default Catalogue;
