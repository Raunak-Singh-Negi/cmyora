import {
  useEffect,
  useState,
} from "react";

import ProductCarousel
  from "./ProductCarousel";

import ColourSelector
  from "./ColourSelector";

import ProductInfo
  from "./ProductInfo";

import MarketplaceLinks
  from "./MarketplaceLinks";


function ProductDetail({
  product,
  onClose,
}) {

  /*
    First colour is automatically selected.
  */

  const [selectedColour, setSelectedColour] =
    useState(
      product.colours?.[0] ?? null
    );


  /*
    Reset colour when switching products.
  */

  useEffect(() => {

    setSelectedColour(
      product.colours?.[0] ?? null
    );

  }, [product]);


  /*
    Prevent the catalogue behind the detail
    overlay from scrolling.
  */

  useEffect(() => {

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";


    return () => {

      document.body.style.overflow =
        previousOverflow;

    };

  }, []);


  /*
    Escape closes the product.
  */

  useEffect(() => {

    function handleKeyDown(event) {

      if (event.key === "Escape") {
        onClose();
      }

    }


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [onClose]);


  return (
    <div
      className="product-detail-backdrop"

      onMouseDown={(event) => {

        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }

      }}
    >

      <article className="product-detail">

        <button
          type="button"
          className="product-detail-close"

          onClick={onClose}

          aria-label="Close product"
        >
          ×
        </button>


        <div className="product-detail-heading">

          <span className="section-label">
            CMYORA
          </span>

          <h2>
            {product.name}
          </h2>

          <p>
            {product.subtitle}
          </p>

        </div>


        <div className="product-detail-main">

          <ProductCarousel
            product={product}

            selectedColour={
              selectedColour
            }
          />


          <ColourSelector
            colours={product.colours}

            selectedColour={
              selectedColour
            }

            onSelect={
              setSelectedColour
            }
          />

        </div>


        <div className="product-detail-panels">

          <ProductInfo
            product={product}
          />

          <MarketplaceLinks
            marketplaces={
              product.marketplaces
            }
          />

        </div>

      </article>

    </div>
  );
}


export default ProductDetail;