function About() {
  return (
    <section className="about-page">

      {/* PAGE INTRO */}

      <header className="about-header">
        <span className="section-label">
          OUR STORY
        </span>

        <h1>About CMYORA</h1>

        <p>
          Rooted in India and shaped by an ambition
          to create enduring leather pieces, CMYORA
          is building a language of craftsmanship,
          character and timeless design.
        </p>
      </header>


      {/* ABOUT CARDS */}

      <div className="about-cards">

        {/* VISION */}

        <article className="about-card about-card-vision">

          <span className="about-card-label">
            OUR DIRECTION
          </span>

          <h2>
            An ambition to leave a lasting mark.
          </h2>

          <div className="about-divider" />

          <p className="about-description">
            At CMYORA, our vision reaches beyond
            creating beautiful leather pieces. We
            are working towards building a name
            recognised for quality, thoughtful
            design and enduring character — with
            the ambition to grow into one of the
            leading names in our segment.
          </p>

        </article>


        {/* MATERIAL */}

        <article className="about-card about-card-material">

          <span className="about-card-label">
            OUR MATERIAL
          </span>

          <h2>
            Indian leather. Contemporary expression.
          </h2>

          <div className="about-divider" />

          <p className="about-description">
            CMYORA works with Indian buffalo leather,
            bringing the character of a distinctly
            Indian material into designs created for
            a contemporary world.
          </p>

          <p className="about-description about-secondary-copy">
            From material to making, our endeavour
            is rooted in India — with a focus on
            transforming leather into pieces that
            feel refined, purposeful and made to
            endure.
          </p>

        </article>


        {/* MANUFACTURING */}

        <article className="about-card about-card-location">

          <span className="about-card-label">
            WHERE WE CREATE
          </span>

          <h2>
            Crafted from Thane, India.
          </h2>

          <div className="about-divider" />

          <p className="about-description">
            Our journey towards creating timeless
            leather pieces is being shaped through
            our manufacturing presence at:
          </p>

          <address className="about-address">
            201, Suraj Heritage<br />
            Ovala Naka, Ghodbunder Road<br />
            Thane, India
          </address>

        </article>

      </div>

    </section>
  );
}

export default About;