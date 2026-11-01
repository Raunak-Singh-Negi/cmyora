import {
  useEffect,
  useMemo,
  useState,
} from "react";


function preloadImage(src) {

  return new Promise((resolve) => {

    const image = new Image();

    image.src = src;

    const finish = () =>
      resolve();


    if (image.decode) {

      image
        .decode()
        .then(finish)
        .catch(finish);

    } else {

      image.onload = finish;
      image.onerror = finish;

    }

  });

}


function ProductCarousel({
  product,
  selectedColour,
}) {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [ready, setReady] =
    useState(false);


  /*
    Only the FIRST image is replaced by
    the selected colour's override.

    Remaining gallery images stay unchanged.
  */

  const gallery = useMemo(() => {

    if (!product.images?.length) {
      return [];
    }


    const result =
      product.images.map((image) => ({
        ...image,
      }));


    if (selectedColour?.imageOverride) {

      result[0] = {
        ...result[0],

        src:
          selectedColour.imageOverride,

        alt:
          `${product.name} in ${selectedColour.name}`,
      };

    }


    return result;

  }, [
    product,
    selectedColour,
  ]);


  /*
    Pre-decode current gallery.

    Since a detail view generally contains
    only a few images, preloading them gives
    smoother carousel transitions.
  */

  useEffect(() => {

    let cancelled = false;

    setReady(false);


    async function prepare() {

      await Promise.all(
        gallery.map((image) =>
          preloadImage(image.src)
        )
      );


      if (!cancelled) {

        setReady(true);

      }

    }


    prepare();


    return () => {

      cancelled = true;

    };

  }, [gallery]);


  /*
    Colour change always returns the visitor
    to the hero image because that's the image
    whose colour may have changed.
  */

  useEffect(() => {

    setActiveIndex(0);

  }, [selectedColour?.id]);


  function previousImage() {

    setActiveIndex((current) =>
      current === 0
        ? gallery.length - 1
        : current - 1
    );

  }


  function nextImage() {

    setActiveIndex((current) =>
      (current + 1) %
      gallery.length
    );

  }


  if (!gallery.length) {
    return null;
  }


  return (
    <div
      className={[
        "product-carousel",
        ready ? "is-ready" : "",
      ].join(" ")}
    >

      <div
        className="carousel-stage"
        onClick={
          gallery.length > 1
            ? nextImage
            : undefined
        }
      >

        {gallery.map(
          (image, index) => (

            <img
              key={`${image.src}-${index}`}

              src={image.src}
              alt={image.alt}

              className={[
                "carousel-image",
                index === activeIndex
                  ? "is-active"
                  : "",
              ].join(" ")}

              draggable="false"
            />

          )
        )}


        {gallery.length > 1 && (
          <>

            {/* PREVIOUS IMAGE */}

            <button
              type="button"

              className="carousel-arrow carousel-arrow-left"

              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}

              aria-label="Previous image"
            >
              ‹
            </button>


            {/* NEXT IMAGE */}

            <button
              type="button"

              className="carousel-arrow carousel-arrow-right"

              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}

              aria-label="Next image"
            >
              ›
            </button>

          </>
        )}


        {/* CAROUSEL DOTS */}

        <div className="carousel-dots">

          {gallery.map(
            (_, index) => (

              <button
                type="button"
                key={index}

                className={[
                  "carousel-dot",

                  index === activeIndex
                    ? "is-active"
                    : "",
                ].join(" ")}

                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex(index);
                }}

                aria-label={
                  `View image ${index + 1}`
                }
              />

            )
          )}

        </div>

      </div>

    </div>
  );
}


export default ProductCarousel;