/**
 * @swagger
 *  components:
 *    schemas:
 *      GameSize:
 *        type: object
 *        properties:
 *          x:
 *            description: Game size x.
 *            type: "integer"
 *            example: 8
 *          y:
 *            description: Game size y.
 *            type: "integer"
 *            example: 8
 *          mines:
 *            description: Number of mines.
 *            type: "integer"
 *            example: 10
 *
 *      Board:
 *        type: object
 *        properties:
 *          size:
 *            $ref: "#/components/schemas/GameSize"
 *          cells:
 *            description: Array of board cells.
 *            type: "array"
 *            items:
 *              type: "array"
 *              items:
 *                $ref: "#/components/schemas/Cell"
 */

const cellsCollectionHelper = require('../helpers/cells-collection-helper');
const Cell = require('./cell-model');

const boardActions = { REVEAL_CELL: 'REVEAL_CELL', FLAG_CELL: 'FLAG_CELL', QUESTION_MARK_CELL: 'QUESTION_MARK_CELL' };

class Board {
  // TO-DO add method to uncover empty cells nearby to uncovered one

  constructor(params) {
    this.size = params.size;
    this.cells = this.buildCells();
  }

  buildCells() {
    return cellsCollectionHelper.buildCells(Cell, this.size);
  }

  modify(action, params) {
    switch (action) {
      case boardActions.REVEAL_CELL:
        return this.revealCell(params);
      default:
    }

    return true;
  }

  revealCell(params) {
    const { result, cells } = cellsCollectionHelper.revealCell(params, this.cells, this.size);
    cellsCollectionHelper.printBoard(cells);
    this.cells = cells;

    return result;
  }
}

module.exports = {
  Board,
  boardActions,
};
