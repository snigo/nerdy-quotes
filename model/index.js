const data = require('./data.json');
const { random } = require('../utils');

/**
 * Models raw data
 * ```
 * {
 *   quote: string
 *   author: string
 * }
 * ```
 * @param {any} raw
 */
function model(raw) {
  const { author, quote } = raw;
  return { author, quote };
}

model.getAll = () => new Promise((res) => {
  setTimeout(() => {
    const response = data.map(model);
    res(response);
  }, random(10, 40));
});

model.getRandom = () => new Promise((res) => {
  setTimeout(() => {
    const response = data.map(model);
    const randomIdx = random(0, response.length - 1);
    const randomQuote = response[randomIdx];
    res(randomQuote);
  }, random(10, 40));
});

module.exports = model;
