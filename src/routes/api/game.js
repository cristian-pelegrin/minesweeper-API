const express = require('express');

const router = express.Router();

const gameController = require('../../controllers/game');

/**
 * @swagger
 * tags:
 *  name: Game
 *  description: Game management
 */

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
 *          description: "A new game"
 *          content:
 *            application/json:
 *              schema:
 *                type: "object"
 *                properties:
 *                  id:
 *                    type: "integer"
 *
 */
router.get('/:id/', gameController.get);

module.exports = router;
