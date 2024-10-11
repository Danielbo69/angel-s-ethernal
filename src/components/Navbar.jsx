import "../App.css";

const opction = [
  {
    title: "Inicio",
  },
  {
    title: "Quienes Somos",
  },
  {
    title: "Catalogo",
  },
  {
    title: "Aliados",
  },
  {
    title: "Contacto",
  },
];

function Navbar() {
  return (
    <nav>
      <ul>
        {opction.map((item, index) => (
          <li key={index}>
            <a href={`#${item.title.toLowerCase()}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
