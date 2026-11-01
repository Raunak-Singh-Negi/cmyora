function ProductCard({
  product,
  onOpen,
}) {

  const cover =
    product.images?.[0];


  return (
    <button
      type="button"
      className="catalogue-card"
      onClick={onOpen}
    >

      <div className="catalogue-card-image-wrap">

        {cover && (

          <img
            src={cover.src}
            alt={cover.alt}
            className="catalogue-card-image"
            loading="lazy"
            decoding="async"
          />

        )}

        <div className="catalogue-card-shade" />

      </div>


      <div className="catalogue-card-copy">

        <span>
          {product.subtitle}
        </span>

        <h2>
          {product.name}
        </h2>

        <span className="catalogue-explore">

          EXPLORE

          <span aria-hidden="true">
            ↗
          </span>

        </span>

      </div>

    </button>
  );
}


export default ProductCard;