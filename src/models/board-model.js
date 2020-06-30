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

class Board {
  // TO-DO add method to uncover empty cells nearby to uncovered one

  constructor(params) {
    this.size = params.size;
    this.cells = params.cells;
  }
}

module.exports = Board;
