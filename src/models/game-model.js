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

const gameStates = {
  CREATED: 'created', STARTED: 'started', VICTORY: 'victory', GAME_OVER: 'game_over',
};

// TO-DO add start time attribute

class Game {
  constructor(params) {
    this.id = params.id || generateUniqueId();
    this.state = params.state || gameStates.CREATED;
    this.level = params.level;
    this.board = params.board;
  }

  modifyBoard(action, params) {
    return this.board.modify(action, params);
  }

  getId() {
    return this.id;
  }

  getState() {
    return this.state;
  }

  setState(value) {
    this.state = value;
  }
}
module.exports = {
  Game,
  gameStates,
};
