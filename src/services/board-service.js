const levelsConfig = require('../config/game/leves');
const { Board } = require('../models/board-model');

function create(params) {
  const { levelId } = params;
  const { size } = levelsConfig[levelId];

  return new Board({ size });
}

module.exports = {
  create,
  modify,
};
