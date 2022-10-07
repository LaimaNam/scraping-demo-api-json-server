const items = require("./data/items");
const tags = require("./data/tags");
const brands = require("./data/brands");
const itemTypes = require("./data/itemTypes");
const products = require("./data/products");

const games = products.map((game, index) => {
  game.id = index + 1;
  game.platform = game.platform.replace(/['"]+/g, "");
  game.genre = game.genre.replace(/['"]+/g, "");
  game.inStock = Math.random() < 0.5;
  return game;
});

module.exports = {
  items,
  tags,
  brands,
  itemTypes,
  products: games,
};

// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
