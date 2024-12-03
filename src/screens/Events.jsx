import CarouselSlider from "../components/CarouselSlider";
import imgPrueba from "../assets/IMGPRUEBA.png";
import Carousel from "../components/Carousel";
import "../styles/Events.css";
function Events({ events, droguerias, farmacias }) {
  return (
    <div className="events" id="aliados">
      <div className="eventsTop" >
        <div className="farmacias">
          <div className="farmacias-logo">
            <div className="farmacias-image">
              <div className="image">
                <Carousel params={farmacias} />
              </div>
            </div>
            <div className="farmacias-title">
              <h1>Farmacias</h1>
              <div className="container-block">
                <div className="block-gray"></div>
                <div className="block-gray"></div>
                <div className="block-gray"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="droguerias">
          <div className="droguerias-logo">
            <div className="droguerias-title">
              <h1>Droguerias</h1>
              <div className="container-block">
                <div className="block-gray"></div>
                <div className="block-gray"></div>
                <div className="block-gray"></div>
              </div>
            </div>
            <div className="droguerias-image">
              <div className="image">
                <Carousel params={droguerias} />
              </div>
            </div>
            {/* {droguerias.map((droguerias) => (
              <div key={droguerias.id} data-drogs={droguerias.title}>
                <img src={droguerias.image} alt={droguerias.title} />
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <br id="eventos"/>
      <div className="eventsBottom" >
        <div>
          <h1>Eventos</h1>
        </div>
        <CarouselSlider params={events} />
      </div>
    </div>
  );
}

export default Events;
