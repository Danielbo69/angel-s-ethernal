import Container from "react-bootstrap/Container";

function ValuesOur({ valuesOur }) {
  return (
    <div className="valuesOur">
      <div className="title">
        <h1>Nuestros Valores</h1>
        <hr />
      </div>
      <Container className="valuesOurContainer">
        {valuesOur.map((values) => (
          <div className="card" key={values.id} data-card={values.id}>
            <img src={values.image} alt={values.title} />
            <h5>{values.title}</h5>
            <p>{values.description}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default ValuesOur;
