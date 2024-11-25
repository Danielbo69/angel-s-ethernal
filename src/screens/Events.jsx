import CarouselSlider from "../components/CarouselSlider";
import '../styles/Events.css'
function Events({ droguerias }) {
  return (
    <div className="events">
      <div className="eventsTop">
        <div className="Farmacias">
          <h1>Farmacias</h1>
        </div>
        <div className="droguerias">
          <div className="droguerias-logo">
            {droguerias.map((droguerias) => (
              <div key={droguerias.id} data-drogs={droguerias.title}>
                <img
                  src={droguerias.image}
                  alt={droguerias.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0px 0px 1px rgba(0,0,0, .8))",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className="eventsBottom">
        <div>
          <h1>Eventos</h1>
        </div>
        <CarouselSlider params={droguerias} />
      </div>
    </div>
  );
}

export default Events;
