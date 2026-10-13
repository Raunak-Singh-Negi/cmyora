import "./App.css";

function App() {
  return (
    <main className="coming-soon">

      <div className="content">

        <p className="brand-label">
          LUXURY LEATHER HANDBAGS
        </p>

        <h1 className="brand-name">
          CMYORA
        </h1>

        <div className="divider"></div>

        <h2>
          Something Beautiful Is Coming
        </h2>

        <p className="description">
          A new expression of elegance,
          craftsmanship, and timeless style.
        </p>

        <p className="launch-message">
          Our website is currently being crafted.
          Stay tuned for our launch.
        </p>

        <a
          href="mailto:sales@cmyora.com"
          className="contact-button"
        >
          GET IN TOUCH
        </a>

      </div>

      <footer>
        © {new Date().getFullYear()} CMYORA.
        All Rights Reserved.
      </footer>

    </main>
  );
}

export default App;