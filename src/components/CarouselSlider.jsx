import { useState } from "react";
import "../styles/CarouselSlider.css";
function CarouselSlider({ params }) {
  const [urlImage, setUrlImage] = useState({
    image: params[0].image,
    title: params[0].title,
  });

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          {urlImage !== "" ? (
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
            onClick={() =>
              setUrlImage({ image: image.image, title: image.title })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselSlider;
