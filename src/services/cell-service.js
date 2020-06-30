const Cell = require('../models/cell-model');

function create(params = null) {
  return new Cell(params);
}

module.exports = {
  create,
};
