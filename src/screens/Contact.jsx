import Container from "react-bootstrap/Container";
import '../styles/Contact.css'
function Contact({ contact }) {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3920.921760107625!2d-71.623502!3d10.663181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDM5JzQ3LjUiTiA3McKwMzcnMjQuNiJX!5e0!3m2!1ses-419!2scl!4v1733120081841!5m2!1ses-419!2scl"
        width="100%"
        height="450"
        style={{ border: "0" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contacto" id="contacto">
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
