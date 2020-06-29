const gameDb = require('../db/db');

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
 *
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
 *          state:
 *            description: Game state.
 *            type: "string"
 *            example: active
 *          size:
 *            $ref: "#/components/schemas/GameSize"
 */

// TO-DO add mine object attributes to game
// TO-DO add warnings object attribute to game
// TO-DO add flags object attributes to game
// TO-DO add question mark object attribute to game
// TO-DO add update function with possibility to edit games attributes like hidden cells, state,

const DB_COLLECTION_NAME = 'games';

function get(id = null) {
  return gameDb.load(DB_COLLECTION_NAME, id);
}

function create(game) {
  return gameDb.save(DB_COLLECTION_NAME, game);
}

function remove(id) {
  return gameDb.remove(DB_COLLECTION_NAME, id);
}

module.exports = {
  get,
  create,
  remove,
};
