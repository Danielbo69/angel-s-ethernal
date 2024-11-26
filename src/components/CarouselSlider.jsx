import { useState, useEffect } from "react";
import "../styles/CarouselSlider.css";

function CarouselSlider({ params }) {
  const [urlImage, setUrlImage] = useState({
    image: params[0].image,
    title: params[0].title,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // Este useEffect controla el autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      // Cambia la imagen cada 5 segundos (puedes ajustar el tiempo aquí)
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % params.length; // Esto asegura que se reinicie cuando llega al final
        setUrlImage({ image: params[nextIndex].image, title: params[nextIndex].title });
        return nextIndex;
      });
    }, 5000); // Intervalo de 5 segundos

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [params.length]); // Vuelve a ejecutar si cambia la longitud de las imágenes

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          {urlImage ? (
            <img src={urlImage.image} alt={urlImage.title} />
          ) : (
            <p>No hay eventos</p>
          )}
        </div>
      </div>
      <div className="thumbnails">
        {params.map((image, index) => (
          <img
            key={index}
            src={image.image}
            alt={image.title}
            onClick={() => {
              setUrlImage({ image: image.image, title: image.title });
              setCurrentIndex(index); // Cambiar el índice actual al hacer clic en una miniatura
            }}
            className={currentIndex === index ? "active-thumbnail" : ""} // Puedes agregar una clase activa para resaltar la miniatura seleccionada
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselSlider;
