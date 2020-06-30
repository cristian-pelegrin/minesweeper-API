/**
 * @swagger
 *  components:
 *    schemas:
 *      Game:
 *        type: object
 *        properties:
 *          id:
 *            description: Game id.
 *            type: "integer"
 *            example: 123
 *          level:
 *            description: Game level.
 *            type: "integer"
 *            example: 1
 *          board:
 *            $ref: "#/components/schemas/Board"
 */

const { generateUniqueId } = require('../helpers/model-helpers');

// TO-DO add update function with possibility to edit games attributes,
// TO-DO add start time attribute

class Game {
  constructor(params) {
    this.id = params.id || generateUniqueId();
    this.state = params.state;
    this.level = params.level;
    this.board = params.board;
  }
}
module.exports = Game;
