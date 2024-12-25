// Importar React y CSS
import React, { useRef } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io";
import "../styles/HorizontalScroll.css";

const HorizontalScroll = ({ params }) => {
  console.log(params);
  const scrollContainerRef = useRef(null);

  // Funciones para desplazarse horizontalmente
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="horizontal-scroll">
      <div className="top-bar">
        <h1 className="title">Droguerías</h1>
        <div className="controls">
          <button onClick={scrollLeft} className="scroll-button">
            <IoIosArrowDropleftCircle id="icons"/>
          </button>
          <button onClick={scrollRight} className="scroll-button">
            <IoIosArrowDroprightCircle id="icons"/>
          </button>
        </div>
      </div>
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="item">
          {params.map((drogs, index) => (
            <div key={index}>
              <img src={drogs.image} alt="Image 1" />
              {/* <p className="item-title">{drogs.title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
