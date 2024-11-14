import CarouselSlider from "../components/CarouselSlider";
function Events({ droguerias }) {
  return (
    <div className="events">
      <div className="eventsTop">
        {/* <div className="Farmacias"></div> */}
        <div className="Droguerias">
          <CarouselSlider params={droguerias} />
        </div>
      </div>
      <div className="eventsBottom">
        <h1>Eventos en carrousel</h1>
      </div>
    </div>
  );
}

export default Events;
