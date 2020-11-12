const getData = require("./parser");

async function start() {
  const cards = await getData("version_");
  console.log('cards: ', cards);
}

start();
