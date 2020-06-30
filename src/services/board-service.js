const levelsConfig = require('../config/game/leves');
const Board = require('../models/board-model');
const Cell = require('../models/cell-model');

// TO-DO add logic to create size game using level send by params (create a new service file with logic)
// TO-DO add logic to calculate warnings (create a new service file with logic)
// TO-DO add mines, warning and hidden info to game

function getTestCells(sizeY, sizeX) { // just a temporal function to mockup cells collection
  const testCells = [];
  for (let y = 0; y < sizeY; y += 1) {
    const testYcells = [];
    for (let x = 0; x < sizeX; x += 1) {
      const newCell = new Cell();
      testYcells.push(newCell);
    }
    testCells.push(testYcells);
  }

  testCells.push([

  ]);

  return testCells;
}

function create(params) {
  const { levelId } = params;
  const { size: levelsize } = levelsConfig[levelId];
  const testBoardParams = {
    size: levelsize,
    cells: getTestCells(levelsize.y, levelsize.x),
  };

  return new Board(testBoardParams);
}

module.exports = {
  create,
};
