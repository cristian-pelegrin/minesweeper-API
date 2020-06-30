const gameDb = require('../db/db');
const Game = require('../models/game-model');

const DB_COLLECTION_NAME = 'games';

function get(id = null) {
  return gameDb.load(DB_COLLECTION_NAME, id);
}

function create(params) {
  const game = new Game(params);

  return gameDb.save(DB_COLLECTION_NAME, game);
}

function remove(id) {
  return gameDb.remove(DB_COLLECTION_NAME, id);
}

module.exports = {
  get,
  create,
  remove,
};
