import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Catalogue({
  productos,
  renderProduct,
  setRenderProduct,
  windowDimension,
}) {
  // const [updateRenderProduct, setUpdateRenderProduct] = useState(10);
  const [updateProduct, setUpdateProduct] = useState([]);
  const [radioValue, setRadioValue] = useState("1");

  useEffect(() => {
    filterProducts("Todos");
  }, []);

  const radios = [
    { name: "Todos", value: "1" },
    { name: "Corporal", value: "2" },
    { name: "Suplementos", value: "3" },
  ];

  const handleCheckedChange = (check, name) => {
    setRadioValue(check);
    filterProducts(name);
  };

  const filterProducts = (name) => {
    const productosAleatorios = productos.sort(() => Math.random() - 0.5);
    if (name === "Todos") {
      setUpdateProduct(productosAleatorios);
      setRenderProduct(15);
    } else {
      const newProducts = productosAleatorios.filter(
        (product) => product.type === name
      );
      setUpdateProduct(newProducts);
      setRenderProduct(15);
    }
  };

  const loadMoreProducts = () => {
    const numberProducts = renderProduct;
    if (windowDimension.innerWidth <= 720) setRenderProduct(numberProducts + 2);
    if (windowDimension.innerWidth >= 728 && windowDimension.innerWidth <= 979)
      setRenderProduct(numberProducts + 3);
    if (windowDimension.innerWidth > 979) setRenderProduct(numberProducts + 5);

    // const numberUpdateProducts = updateRenderProduct;
    // setUpdateRenderProduct(numberUpdateProducts + 5);
  };

  return (
    <Container style={{ padding: "3rem" }}>
      <div className="catalogueTop">
        <h1 style={{ borderBottom: "2px solid #4f8b33", fontWeight: "bold" }}>
          Catalogo
        </h1>
        <div className="catalogueRadio">
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={"outline-success"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={() => handleCheckedChange(radio.value, radio.name)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>
      </div>
      <Row className="catalogue">
        {updateProduct.slice(0, renderProduct).map((producto, index) => (
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
        {renderProduct < updateProduct.length && (
          <button className="button" onClick={() => loadMoreProducts()}>
            Ver más productos
          </button>
        )}
      </Row>
    </Container>
  );
}

export default Catalogue;
