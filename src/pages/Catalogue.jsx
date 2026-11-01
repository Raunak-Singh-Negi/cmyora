import {
  useMemo,
  useState,
} from "react";

import {
  products,
} from "../data/products";

import ProductCard
  from "../components/catalogue/ProductCard";

import ProductDetail
  from "../components/catalogue/ProductDetail";


function Catalogue() {

  const [
    selectedProduct,
    setSelectedProduct,
  ] = useState(null);


  const orderedProducts =
    useMemo(() => {

      return [...products].sort(
        (a, b) =>
          a.order - b.order
      );

    }, []);


  return (
    <section className="catalogue-page">

      <header className="catalogue-header">

        <span className="section-label">
          CMYORA COLLECTIONS
        </span>

        <h1>
          Catalogue
        </h1>

        <p>
          Discover leather pieces shaped
          with character, considered detail
          and a distinctly CMYORA expression.
        </p>

      </header>


      <div className="catalogue-grid">

        {orderedProducts.map(
          (product) => (

            <ProductCard
              key={product.id}

              product={product}

              onOpen={() =>
                setSelectedProduct(
                  product
                )
              }
            />

          )
        )}

      </div>


      {selectedProduct && (

        <ProductDetail
          product={
            selectedProduct
          }

          onClose={() =>
            setSelectedProduct(null)
          }
        />

      )}

    </section>
  );
}


export default Catalogue;