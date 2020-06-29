const express = require('express');

const router = express.Router();

const gameController = require('../../controllers/game-controller');

/**
 * @swagger
 * tags:
 *  name: Game
 *  description: Game management
 */

/**
 * @swagger
 * path:
 *  /game:
 *    get:
 *      summary: "Get all games"
 *      tags: [Game]
 *      responses:
 *        "200":
 *          description: "All games created"
 *          content:
 *            application/json:
 *              schema:
 *                type: "array"
 *                items:
 *                  $ref: "#/components/schemas/Game"
 *        "400":
 *          description: "Bad request"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_400'
 *        "404":
 *          description: "Not found"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_404'
 *        "500":
 *          description: "Not found"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_500'
 */

router.get('/', gameController.getAll);

/**
 * @swagger
 * path:
 *  /game/{id}:
 *    get:
 *      summary: "Get a game"
 *      tags: [Game]
 *      parameters:
 *      - name: "id"
 *        description: "game id"
 *        in: "path"
 *        required: true
 *        schema:
 *          type: "integer"
 *      responses:
 *        "200":
 *          description: "The game requested"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Game'
 *        "400":
 *          description: "Bad request"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_400'
 *        "404":
 *          description: "Not found"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_404'
 *        "500":
 *          description: "Not found"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_500'
 */
router.get('/:id/', gameController.getGame);

/**
 * @swagger
 * path:
 *  /game:
 *    post:
 *      summary: "Create a new game"
 *      tags: [Game]
 *      responses:
 *        "200":
 *          description: "A new game"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Game'
 *        "400":
 *          description: "Bad request"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_400'
 *        "404":
 *          description: "Not found"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_404'
 *        "500":
 *          description: "Not found"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_500'
 */
router.post('/', gameController.createGame);

/**
 * @swagger
 * path:
 *  /game:
 *    delete:
 *      summary: "Delete a game"
 *      tags: [Game]
 *      requestBody:
 *        description: "Game id to delete"
 *        content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    type: "boolean"
 *                    example: 123
 *      responses:
 *        "200":
 *          description: "Game deleted"
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: "boolean"
 *                    example: true
 *        "400":
 *          description: "Bad request"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_400'
 *        "404":
 *          description: "Not found"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_404'
 *        "500":
 *          description: "Not found"
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error_500'
 */
router.delete('/', gameController.deleteGame);

// TO-DO add PUT method to uncover cell
// TO-DO add PUT method to edit game state, add/remove flags, add/remove question marks

module.exports = router;
