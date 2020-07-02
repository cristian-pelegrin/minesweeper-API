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

  setHasMine(value) {
    this.hasMine = value;
  }

  getHasMine() {
    return this.hasMine;
  }

  setWarnings(value) {
    this.warnings = value;
  }

  getWarnings() {
    return this.warnings;
  }

  getHidden() {
    return this.hidden;
  }

  setFlag(value) {
    this.flagged = (typeof (value) === 'boolean') ? value : !this.flagged;
    this.questionSignMarked = false;
  }

  setQuestionSignMarked(value) {
    this.questionSignMarked = (typeof (value) === 'boolean') ? value : !this.questionSignMarked;
    this.flagged = false;
  }

  reveal() {
    this.hidden = false;
    this.flagged = false;
    this.questionSignMarked = false;

    return { mine: this.hasMine, warnings: this.warnings };
  }

  getStringRepresentation() {
    if (this.flagged) return 'f';
    if (this.questionSignMarked) return '?';
    if (this.hidden) return ' ';
    if (this.warnings) return `${this.warnings}`;
    if (this.hasMine) return 'm';

    return '_';
  }
}

module.exports = Cell;
