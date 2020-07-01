const levelsConfig = require('../config/game/leves');
const Board = require('../models/board-model');

function create(params) {
  const { levelId } = params;
  const { size } = levelsConfig[levelId];

  return new Board({ size });
}

function modify(params) {
  // TO-DO Add logic to uncover cells
  // TO-DO Add logic to flag cell
  // TO-DO Add logic to add question mark to cell
  // TO-DO Add logic to change status game if user win or game-over
  return params;
}

module.exports = {
  create,
  modify,
};
