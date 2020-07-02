const { gameStates } = require('../models/game-model');

function isInValidPUTRequest(req) {
  return (!req.body.position
    || req.body.position.row === null
    || req.body.position.column === null
    || !req.body.id);
}

function isGameAvailable(game) {
  return game.getState() === gameStates.STARTED || game.getState() === gameStates.CREATED;
}

module.exports = {
  isInValidPUTRequest,
  isGameAvailable,
};
