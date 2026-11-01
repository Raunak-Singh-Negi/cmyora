import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">
          <Link
            to="/"
            className="footer-logo"
          >
            CMYORA
          </Link>

          <p>
            Luxury Leather
            <br />
            Handbags
          </p>
        </div>


        {/* EXPLORE */}

        <nav
          className="footer-column"
          aria-label="Footer navigation"
        >
          <span className="footer-heading">
            EXPLORE
          </span>

          <Link to="/">
            Home
          </Link>

          <Link to="/catalogue">
            Catalogue
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </nav>


        {/* CONNECT */}

        <div className="footer-column">
          <span className="footer-heading">
            CONNECT
          </span>

          <a
            href="mailto:sales@cmyora.com"
          >
            Email
          </a>

          <a
            href="https://wa.me/919223808080"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

      </div>


      {/* LOWER FOOTER */}

      <div className="footer-bottom">

        <span>
          Crafted in India
        </span>

        <span>
          © {new Date().getFullYear()} CMYORA
        </span>

      </div>

    </footer>
  );
}

export default Footer;