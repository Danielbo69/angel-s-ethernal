import Container from "react-bootstrap/Container";
function Contact({ contact }) {
  console.log(contact);
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26612.784334489013!2d-70.62666727211914!3d-33.51183359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d067d1e0e7d7%3A0x94d9cb68f79c0a28!2sHospital%20La%20Florida%20Dra.%20Elo%C3%ADsa%20D%C3%ADaz!5e0!3m2!1ses-419!2scl!4v1729396095465!5m2!1ses-419!2scl"
        width="100%"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contacto">
        {contact.map((contact) => (
          <Container key={contact.id}>
            <div className="contacto-info">
              <h1> {contact.title} </h1>
              {contact.title === "Dirección" ? (
                <p>{contact.address}</p>
              ) : (
                <>
                  <p>{contact.emailContacto}</p>
                  <p>{contact.emailAdmin}</p>
                  <p>{contact.emailSales}</p>
                </>
              )}
            </div>
          </Container>
        ))}
      </div>
    </div>
  );
}

export default Contact;
