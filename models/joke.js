const mysqlPool = require('../lib/mysqlPool');
const { extractValidFields } = require('../lib/validation');
const max = 117;

const JokeSchema = {
  id: {required: false},
  setup: {required: true},
  punchline: {required: true},
}
exports.JokeSchema = JokeSchema;

async function getJoke(){
  const id = getRandomInt();
  const [ results ] = await mysqlPool.query(
    'SELECT * FROM jokes WHERE id = ?',
    [id]
  );
  return results[0];
}
exports.getJoke = getJoke;

function getRandomInt(){
  return Math.floor(Math.random() * max);
}
