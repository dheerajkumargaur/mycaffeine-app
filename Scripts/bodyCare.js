// data to map
const bodyCareData = [
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/card-1_340dd7ab-c7f7-4683-b52c-5aa9d45a89df_360x.jpg?v=1657680785%22",
    id: 101,
    originalPrice: 500,
    discountedPrice: 450,
    name: "Coffee Body Scrub for Tan-Free & Smooth Skin - 100 g - Natural & Vegan",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/PrimaryImage_3_44052f0e-d848-4985-9fe2-a324d38b288f.jpg?v=1669275527",
    id: 102,
    originalPrice: 350,
    discountedPrice: 300,
    name: "Moisturizing & Creamy Coffee Body Scrub with Berries for Smooth Skin - 200g",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_43da1e47-13c4-410e-a19f-3c2541099127.jpg?v=1675940080&width=550",
    id: 103,
    originalPrice: 1027,
    discountedPrice: 873,
    name: "Body Cleansing & Moisturizing Trio with Almonds",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_1.jpg?v=1669190993&width=550",
    id: 104,
    originalPrice: 705,
    discountedPrice: 599,
    name: "Body Polishing Kit with Berries",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/card-1a.jpg?v=1649159773&width=550",
    id: 105,
    originalPrice: 749,
    discountedPrice: 637,
    name: "Coffee Exfoliation and Tan Removal Kit - Natural & Vegan",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/1454/5188/products/1_74a6d4d9-6765-4b3e-b4e8-c72ca33f32b1_360x.jpg?v=1630554461%22",
    id: 106,
    originalPrice: 375,
    discountedPrice: 319,
    name: "Coffee Travel Polishing Essentials",
  },
];

// append to this div
var bodyCareContainer = document.getElementById("bodyCareContainer");
var img = bodyCareData[0];
var name = bodyCareData[1];
var originalPrice = bodyCareData[2];
var discountedPrice = bodyCareData[3];

var output = imgs.map((img, index) => {
  return {
    img: img[index],
    description: descriptions[index],
    originalPrice: originalPrice[index],
    discountedPrice: discountedPrice[index],
  };
});
