import {
  useState,
} from "react";


function ProductInfo({
  product,
}) {

  const [open, setOpen] =
    useState(false);


  return (
    <div className="product-dropdown">

      <button
        type="button"

        className="product-dropdown-trigger"

        onClick={() =>
          setOpen(
            (current) =>
              !current
          )
        }
      >

        <span>
          PRODUCT INFORMATION
        </span>

        <span
          className={[
            "dropdown-plus",
            open
              ? "is-open"
              : "",
          ].join(" ")}
        >
          +
        </span>

      </button>


      <div
        className={[
          "product-dropdown-content",
          open
            ? "is-open"
            : "",
        ].join(" ")}
      >

        <div className="product-information">


          {/* DESCRIPTION */}

          {product.description && (

            <section className="product-info-section">

              <span className="product-info-heading">
                DESCRIPTION
              </span>

              <p className="product-description">
                {product.description}
              </p>

            </section>

          )}


          {/* SPECIFICATIONS */}

          {product.specifications?.length > 0 && (

            <section className="product-info-section">

              <span className="product-info-heading">
                SPECIFICATIONS
              </span>

              <div className="specification-list">

                {product.specifications.map(
                  (spec) => (

                    <div
                      className="specification-row"
                      key={spec.label}
                    >

                      <span>
                        {spec.label}
                      </span>

                      <strong>
                        {spec.value}
                      </strong>

                    </div>

                  )
                )}

              </div>

            </section>

          )}


          {/* FEATURES */}

          {product.highlights?.length > 0 && (

            <section className="product-info-section">

              <span className="product-info-heading">
                DETAILS
              </span>

              <ul className="product-highlight-list">

                {product.highlights.map(
                  (highlight) => (

                    <li key={highlight}>
                      {highlight}
                    </li>

                  )
                )}

              </ul>

            </section>

          )}


          {/* WARRANTY */}

          {product.warranty && (

            <section className="product-info-section">

              <span className="product-info-heading">
                WARRANTY
              </span>

              <p className="product-description">

                <strong>
                  {product.warranty.duration}
                </strong>

                {" — "}

                {product.warranty.summary}

              </p>

            </section>

          )}


          {/* MANUFACTURER */}

          {product.manufacturer && (

            <section className="product-info-section">

              <span className="product-info-heading">
                MANUFACTURED IN INDIA
              </span>

              <address className="product-manufacturer">

                {
                  product
                    .manufacturer
                    .address
                }

                <br />

                {
                  product
                    .manufacturer
                    .country
                }

              </address>

            </section>

          )}

        </div>

      </div>

    </div>
  );
}


export default ProductInfo;