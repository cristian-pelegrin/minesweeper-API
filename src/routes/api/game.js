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
 *      requestBody:
 *        description: "Game level"
 *        content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  level:
 *                    required: false
 *                    type: "integer"
 *                    enum:
 *                      - 1
 *                      - 2
 *                      - 3
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
 *                    type: "integer"
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

/**
 * @swagger
 * path:
 *  /game/cell/reveal:
 *    put:
 *      summary: "Reveal a game cell"
 *      tags: [Game]
 *      requestBody:
 *        description: "Body with information of game and board result"
 *        content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    description: "Game id"
 *                    type: "integer"
 *                    example: 123
 *                  position:
 *                    description: "cell position"
 *                    type: object
 *                    properties:
 *                      row:
 *                        description: "row position"
 *                        type: "integer"
 *                        example: 4
 *                      column:
 *                        description: "column position"
 *                        type: "integer"
 *                        example: 3
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
router.put('/cell/reveal', gameController.revealCell);

/**
 * @swagger
 * path:
 *  /game/cell/flag:
 *    put:
 *      summary: "Flag or un-flag flag of a cell"
 *      tags: [Game]
 *      requestBody:
 *        description: "Body with information of game and board result"
 *        content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    description: "Game id"
 *                    type: "integer"
 *                    example: 123
 *                  value:
 *                    description: "value of flag"
 *                    type: boolean
 *                    example: true
 *                  position:
 *                    description: "cell position"
 *                    type: object
 *                    properties:
 *                      row:
 *                        description: "row position"
 *                        type: "integer"
 *                        example: 4
 *                      column:
 *                        description: "column position"
 *                        type: "integer"
 *                        example: 3
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
router.put('/cell/flag', gameController.markFlag);

/**
 * @swagger
 * path:
 *  /game/cell/question:
 *    put:
 *      summary: "Reveal a game cell"
 *      tags: [Game]
 *      requestBody:
 *        description: "Body with information of game and board result"
 *        content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  id:
 *                    description: "Game id"
 *                    type: "integer"
 *                    example: 123
 *                  value:
 *                    description: "value of question"
 *                    type: boolean
 *                    example: true
 *                  position:
 *                    description: "cell position"
 *                    type: object
 *                    properties:
 *                      row:
 *                        description: "row position"
 *                        type: "integer"
 *                        example: 4
 *                      column:
 *                        description: "column position"
 *                        type: "integer"
 *                        example: 3
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
router.put('/cell/question', gameController.markQuestion);

module.exports = router;
