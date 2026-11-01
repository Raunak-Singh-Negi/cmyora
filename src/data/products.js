import valenne01 from "../assets/images/products/valenne/01.webp";
import valenne02 from "../assets/images/products/valenne/02.webp";
import valenne03 from "../assets/images/products/valenne/03.webp";
import valenne04 from "../assets/images/products/valenne/04.webp";

import noirelle01 from "../assets/images/products/noirelle/01.webp";


export const products = [

  /* =======================================================
     THE VALENNE
     ======================================================= */

  {
    id: "valenne",

    order: 1,

    category: "handbags",

    name: "The Valenne",

    model: "CMYORA0001",

    subtitle: "Structured Leather Tote",

    description:
      "A structured CMYORA handbag shaped in genuine leather with a crocodile-textured finish, refined gold-tone detailing and versatile carrying options. Designed with generous interior space for everyday essentials.",


    /*
      IMAGE 01 IS AUTOMATICALLY:
      - Catalogue cover
      - First carousel image
    */

    images: [
      {
        src: valenne01,
        alt: "CMYORA The Valenne front view",
      },

      {
        src: valenne02,
        alt: "CMYORA The Valenne side view",
      },

      {
        src: valenne03,
        alt: "CMYORA The Valenne rear view",
      },

      {
        src: valenne04,
        alt: "CMYORA The Valenne interior view",
      },
    ],


    /*
      First colour is automatically selected.

      No imageOverride yet because we currently
      only have the brown product photographs.

      Therefore customers may select the other
      swatches, but the gallery remains unchanged.
    */

    colours: [
      {
        id: "garnet-burgundy",
        name: "Garnet Burgundy",
        hex: "#641D2A",
      },
     
        {
        id: "heritage-brown",
        name: "Heritage Brown",
        hex: "#4A2118",
      },

     

      {
        id: "midnight-black",
        name: "Midnight Black",
        hex: "#111111",
      },
    ],


    /*
      VERIFIED / PROVIDED PRODUCT INFORMATION
    */

    specifications: [

      {
        label: "Model",
        value: "CMYORA0001",
      },

      {
        label: "Material",
        value: "Genuine Leather with Solid Brass Fittings",
      },

      {
        label: "Leather Type",
        value: "Top Grain",
      },

      {
        label: "Bag Design",
        value: "Tote Bag",
      },

      {
        label: "Type",
        value: "Shoulder Bag",
      },

      {
        label: "External Width",
        value: "30 cm",
      },

      {
        label: "External Height",
        value: "25 cm",
      },

      {
        label: "External Depth",
        value: "3.67 inch",
      },

      {
        label: "Weight",
        value: "1200 g",
      },

      {
        label: "Closure",
        value: "Zipper",
      },

      {
        label: "Compartments",
        value: "4",
      },

      {
        label: "Sales Package",
        value: "1 Handbag, 1 Shoulder Strap",
      },

      {
        label: "Tanning Process",
        value: "Chrome",
      },

      {
        label: "Expandable",
        value: "No",
      },

      {
        label: "Waterproof",
        value: "No",
      },

      {
        label: "Gift Pack",
        value: "Yes",
      },

      {
        label: "Country of Origin",
        value: "India",
      },
    ],


    highlights: [
      "Dual top handles",
      "Detachable shoulder strap",
      "Crocodile-textured finish",
      "Decorative chain detailing",
      "Zip closure",
      "Multiple carrying options",
    ],


    warranty: {
      duration: "2 Years",

      summary:
        "Manufacturer warranty against manufacturing defects. Warranty does not cover damage due to normal wear and tear, misuse, accidents or improper care.",
    },


    manufacturer: {
      country: "India",

      address:
        "201, Suraj Heritage, Ovala Naka, Ghodbunder Road, Thane",
    },


    marketplaces: {

      amazon: {
        enabled: false,
        url: "",
      },

      flipkart: {
        enabled: false,
        url: "",
      },

      myntra: {
        enabled: false,
        url: "",
      },

      meesho: {
        enabled: false,
        url: "",
      },

      nykaa: {
        enabled: false,
        url: "",
      },

    },
  },


  /* =======================================================
     THE NOIRELLE
     ======================================================= */

  {
    id: "noirelle",

    order: 2,

    category: "handbags",

    name: "The Noirelle",

    model: "CMYORA0002",

    subtitle: "Crocodile-Texture Leather Handbag",

    description:
      "A statement CMYORA handbag combining a structured silhouette with crocodile-textured leather, polished gold-tone hardware and an extended shoulder strap for versatile carrying.",


    /*
      Only one photograph currently exists.

      The carousel component automatically handles
      a one-image product:
      - no unnecessary arrows
      - one selected dot
      - same architecture as larger galleries
    */

    images: [
      {
        src: noirelle01,
        alt: "CMYORA The Noirelle front view",
      },
    ],


    /*
      Current photographed variant is black.

      Keep this as one colour until the company
      confirms additional variants for this model.
    */

    colours: [
      {
        id: "midnight-black",
        name: "Midnight Black",
        hex: "#111111",
      },
    ],


    specifications: [

      {
        label: "Model",
        value: "CMYORA0002",
      },

      {
        label: "Leather Type",
        value: "Top Grain",
      },

      {
        label: "Bag Design",
        value: "Tote Bag",
      },

      {
        label: "Closure",
        value: "Zipper",
      },

      {
        label: "External Height",
        value: "25 cm",
      },

      /*
        SUPPLIED VALUES APPEAR QUESTIONABLE.

        Better to display "To be confirmed" on
        the beta website rather than publish
        potentially incorrect dimensions.
      */

      {
        label: "External Width",
        value: "To be confirmed",
      },

      {
        label: "External Depth",
        value: "To be confirmed",
      },

      {
        label: "Weight",
        value: "1000 g",
      },

      {
        label: "Sales Package",
        value: "1 Handbag, 1 Shoulder Strap",
      },

      {
        label: "Tanning Process",
        value: "Chrome",
      },

      {
        label: "Expandable",
        value: "No",
      },

      {
        label: "Country of Origin",
        value: "India",
      },
    ],


    highlights: [
      "Structured silhouette",
      "Crocodile-textured finish",
      "Top handles",
      "Extended shoulder strap",
      "Gold-tone hardware",
      "Zip closure",
    ],


    warranty: null,


    manufacturer: {
      country: "India",

      address:
        "201, Suraj Heritage, Ovala Naka, Ghodbunder Road, Thane",
    },


    marketplaces: {

      amazon: {
        enabled: false,
        url: "",
      },

      flipkart: {
        enabled: false,
        url: "",
      },

      myntra: {
        enabled: false,
        url: "",
      },

      meesho: {
        enabled: false,
        url: "",
      },

      nykaa: {
        enabled: false,
        url: "",
      },

    },
  },

];