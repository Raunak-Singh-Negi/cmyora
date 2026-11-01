function Contact() {
  return (
    <section className="contact-page">

      <header className="contact-header">
        <span className="section-label">
          CONNECT WITH US
        </span>

        <h1>Contact CMYORA</h1>

        <p>
          Questions, enquiries or simply something
          you'd like to share — we'd be delighted
          to hear from you.
        </p>
      </header>


      <div className="contact-cards">

        {/* PHONE / WHATSAPP */}

        <article className="contact-card contact-card-phone">

          <span className="contact-card-label">
            CONTACT &amp; WHATSAPP
          </span>

          <a
            className="contact-value"
            href="https://wa.me/919223808080"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 92238 08080
          </a>

          <div className="contact-divider" />

          <p className="contact-description">
            Have a question about CMYORA, our
            collections or something you have seen?
            Reach out to us directly. We are only
            a message away.
          </p>

          <a
            className="contact-action"
            href="https://wa.me/919223808080"
            target="_blank"
            rel="noopener noreferrer"
          >
            MESSAGE ON WHATSAPP
            <span aria-hidden="true">↗</span>
          </a>

        </article>


        {/* EMAIL */}

        <article className="contact-card contact-card-email">

          <span className="contact-card-label">
            WRITE TO US
          </span>

          <a
            className="contact-value contact-email"
            href="mailto:sales@cmyora.com"
          >
            sales@cmyora.com
          </a>

          <div className="contact-divider" />

          <p className="contact-description">
            Whether it is an enquiry, a suggestion,
            feedback or simply a thought you would
            like to share, write to us. Every message
            matters, and we would be glad to hear
            from you.
          </p>

          <a
            className="contact-action"
            href="mailto:sales@cmyora.com"
          >
            SEND AN EMAIL
            <span aria-hidden="true">↗</span>
          </a>

        </article>

      </div>

    </section>
  );
}

export default Contact;