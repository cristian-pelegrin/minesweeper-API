/**
 * @swagger
 *  components:
 *    schemas:
 *      Cell:
 *        type: object
 *        properties:
 *          hidden:
 *            description: If cell is hidden
 *            type: "boolean"
 *            example: true
 *          hasMine:
 *            description: If cell has a mine.
 *            type: "boolean"
 *            example: true
 *          warnings:
 *            description: Number of nearby mines.
 *            type: "integer"
 *            example: 0
 *          flagged:
 *            description: If cell is marked with a flag.
 *            type: "boolean"
 *            example: true
 *          questionSignMarked:
 *            description: If cell is marked with a question sign.
 *            type: "boolean"
 *            example: true
 */

class Cell {
  constructor(params = {}) {
    this.hidden = params.hidden || true;
    this.hasMine = params.hasMine || false;
    this.warnings = params.warnings || 0;
    this.flagged = params.flagged || false;
    this.questionSignMarked = params.questionSignMarked || false;
  }
}

module.exports = Cell;
