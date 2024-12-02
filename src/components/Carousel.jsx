import React from "react";
import { useState, useEffect } from "react";

function Carousel({ params }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar la imagen automáticamente cada 3 segundos (3000ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % params.length);
    }, 8000); // Ajusta el tiempo en milisegundos según tus necesidades

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [params.length]);
  return (
    <>
      <img
        src={params[currentIndex]}
        alt="carousel"
        className="carousel-image"
      />
    </>
  );
}

export default Carousel;
