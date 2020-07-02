const gameDb = require('../db/db');
const { Game, gameStates } = require('../models/game-model');
const { boardActions } = require('../models/board-model');

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

function revealCell(position, id) {
  const game = gameDb.load(DB_COLLECTION_NAME, id);
  if (!game) return null;
  if (game.getState() === gameStates.GAME_OVER) return game;
  if (game.getState() === gameStates.CREATED) game.setState(gameStates.STARTED);
  const result = game.modifyBoard(boardActions.REVEAL_CELL, { position });
  if (!result) game.setState(gameStates.GAME_OVER);

  // eslint-disable-next-line consistent-return
  return gameDb.update(DB_COLLECTION_NAME, game);
}

module.exports = {
  get,
  create,
  remove,
  revealCell,
};
