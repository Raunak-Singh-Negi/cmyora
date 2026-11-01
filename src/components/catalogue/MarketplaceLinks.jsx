import {
  useState,
} from "react";


const marketplaceDefinitions = {

  amazon: {
    name: "Amazon",
    mark: "A",
  },

  flipkart: {
    name: "Flipkart",
    mark: "F",
  },

  myntra: {
    name: "Myntra",
    mark: "M",
  },

  meesho: {
    name: "Meesho",
    mark: "ME",
  },

  nykaa: {
    name: "Nykaa",
    mark: "N",
  },

};


function MarketplaceLinks({
  marketplaces,
}) {

  const [open, setOpen] =
    useState(false);


  return (
    <div className="product-dropdown">

      <button
        type="button"
        className="product-dropdown-trigger"

        onClick={() =>
          setOpen((current) => !current)
        }
      >

        <span>
          WHERE TO FIND IT
        </span>

        <span
          className={
            open
              ? "dropdown-plus is-open"
              : "dropdown-plus"
          }
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

        <p className="marketplace-intro">
          Discover this piece through
          CMYORA's available marketplace
          listings.
        </p>


        <div className="marketplace-list">

          {Object.entries(
            marketplaceDefinitions
          ).map(
            ([key, definition]) => {

              const configuration =
                marketplaces?.[key];

              const active =
                configuration?.enabled &&
                configuration?.url;


              if (active) {

                return (
                  <a
                    key={key}

                    className="marketplace-item is-active"

                    href={
                      configuration.url
                    }

                    target="_blank"

                    rel="noopener noreferrer"
                  >

                    <span className="marketplace-mark">
                      {definition.mark}
                    </span>

                    <span>
                      {definition.name}
                    </span>

                    <span className="marketplace-arrow">
                      ↗
                    </span>

                  </a>
                );

              }


              return (
                <div
                  key={key}

                  className="marketplace-item is-disabled"

                  aria-disabled="true"
                >

                  <span className="marketplace-mark">
                    {definition.mark}
                  </span>

                  <span>
                    {definition.name}
                  </span>

                </div>
              );

            }
          )}

        </div>

      </div>

    </div>
  );
}


export default MarketplaceLinks;