function ColourSelector({
  colours,
  selectedColour,
  onSelect,
}) {

  if (!colours?.length) {
    return null;
  }


  return (
    <div className="colour-selector">

      <span className="colour-heading">
        AVAILABLE COLOURS
      </span>


      <div className="colour-list">

        {colours.map((colour) => {

          const selected =
            selectedColour?.id ===
            colour.id;


          return (
            <button
              type="button"
              key={colour.id}

              className={[
                "colour-option",

                selected
                  ? "is-selected"
                  : "",
              ].join(" ")}

              onClick={() =>
                onSelect(colour)
              }
            >

              <span
                className="colour-swatch"
                style={{
                  backgroundColor:
                    colour.hex,
                }}
              />

              <span className="colour-name">
                {colour.name}
              </span>

            </button>
          );

        })}

      </div>

    </div>
  );
}


export default ColourSelector;