import IntroAnimation from "../components/home/IntroAnimation";
import CollectionShowcase from "../components/home/CollectionShowcase";

function Home() {
  return (
    <section className="home-hero">

      <div className="home-brand-area">
        <IntroAnimation />
      </div>

      <div className="home-product-area">
        <CollectionShowcase />
      </div>

    </section>
  );
}

export default Home;