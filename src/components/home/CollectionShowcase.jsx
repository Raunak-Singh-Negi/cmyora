import { useEffect, useState } from "react";
import { featuredCollection } from "../../data/featuredCollection";

const SLIDE_DURATION = 5500;

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();

    image.src = src;

    const finish = () => resolve();

    if (image.decode) {
      image.decode().then(finish).catch(finish);
    } else {
      image.onload = finish;
      image.onerror = finish;
    }
  });
}

function CollectionShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesReady, setImagesReady] = useState(false);

  /*
    Preload the first showcase images before starting
    automatic transitions.
  */
  useEffect(() => {
    let cancelled = false;

    async function prepareImages() {
      await Promise.all(
        featuredCollection.map((item) =>
          preloadImage(item.image)
        )
      );

      if (!cancelled) {
        setImagesReady(true);
      }
    }

    prepareImages();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
    Only start cycling AFTER the images have decoded.
  */
  useEffect(() => {
    if (!imagesReady || featuredCollection.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) =>
        (current + 1) % featuredCollection.length
      );
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(timer);
    };
  }, [imagesReady]);

  return (
    <section
      className={`collection-showcase ${
        imagesReady ? "showcase-ready" : ""
      }`}
      aria-label="Latest CMYORA collection"
    >
      <div className="showcase-stage">

        {featuredCollection.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={item.id}
              className={[
                "showcase-slide",
                isActive ? "is-active" : "",
                index % 2 === 0
                  ? "transition-from-left"
                  : "transition-from-right",
              ].join(" ")}
              aria-hidden={!isActive}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="showcase-image"
                draggable="false"
              />

              <div className="showcase-shade" />

              <div className="showcase-copy">
                <span className="showcase-eyebrow">
                  {item.eyebrow}
                </span>

                <h2>{item.title}</h2>
              </div>
            </article>
          );
        })}

        <div className="showcase-gold-frame" />

        <div className="showcase-counter">
          <span>
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <span className="counter-line" />

          <span>
            {String(featuredCollection.length).padStart(2, "0")}
          </span>
        </div>

      </div>
    </section>
  );
}

export default CollectionShowcase;