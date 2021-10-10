const { validateAgainstSchema } = require('../lib/validation');
const {
  fetchJoke,
  JokeSchema
} = require('../models/joke');

async function getJoke(){
  const joke = await fetchJoke()
  return joke;
}
exports.getJoke = getJoke;
