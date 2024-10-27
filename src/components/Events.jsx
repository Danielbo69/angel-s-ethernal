import imageEventTop from "../assets/IMGPRUEBA.png";

const eventsTop = [
  {
    id: 1,
    title: "Farmacias",
    image: imageEventTop,
  },
  {
    id: 2,
    title: "Droguerias",
    image: imageEventTop,
  },
];

const containerVacios = [{ id: 1 }, { id: 2 }, { id: 3 }];

function Events() {
  return (
    <div className="events">
      <div className="eventsTop">
        {eventsTop.map((eventTop) => (
          <div data-events={eventTop.id} key={eventTop.id}>
            <div className="card">
              <img src={eventTop.image} alt={eventTop.title} />
            </div>
            <div className={eventTop.title}>
              <div>
                <h2>{eventTop.title}</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {containerVacios.map((vacio) => (
                  <div
                    key={vacio.id}
                    className="contentVacios"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="eventsBottom">
        <h1>Eventos en carrousel</h1>
      </div>
    </div>
  );
}

export default Events;
