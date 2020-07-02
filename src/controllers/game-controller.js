const errorMessages = require('../constants/error-messages');
const gameService = require('../services/game-service');
const boardService = require('../services/board-service');
const { gameStates } = require('../models/game-model');

function getAll(req, res) {
  const games = gameService.get();
  res.status(200).json(games);
}

function getGame(req, res) {
  const gameId = Number(req.params.id);
  if (!gameId) {
    res.status(400).json({ message: errorMessages.WRONG_PARAMS });

    return;
  }
  const game = gameService.get(gameId);
  if (game === undefined) {
    res.status(404).json({ message: errorMessages.GAME_NOT_FOUND });

    return;
  }

  res.status(200).json({ game });
}

function createGame(req, res) {
  // TO-DO add start time attribute
  const levelId = req.body.level || 1;

  const newBoard = boardService.create({ levelId });

  const gameParams = {
    level: levelId,
    board: newBoard,
  };
  const newGame = gameService.create(gameParams);
  res.status(200).json({ game: newGame });
}

function deleteGame(req, res) {
  const gameId = req.body.id;
  if (!gameId) {
    res.status(400).json({ message: errorMessages.WRONG_PARAMS });

    return;
  }
  if (!gameService.remove(gameId)) {
    res.status(404).json({ message: errorMessages.GAME_NOT_FOUND });

    return;
  }
  res.status(200).json({ success: true });
}

function isGameAvailable(game) {
  return game.getState() === gameStates.STARTED || game.getState() === gameStates.CREATED;
}
// eslint-disable-next-line consistent-return
function revealCell(req, res) {
  if (!req.body.position
    || req.body.position.row === null
    || req.body.position.column === null
    || !req.body.id) {
    res.status(400).json({ message: errorMessages.WRONG_PARAMS });

    return;
  }

  const game = gameService.revealCell(req.body.position, Number(req.body.id));
  if (game === null) {
    res.status(404).json({ message: errorMessages.GAME_NOT_FOUND });

    return;
  }
  if (!isGameAvailable(game)) {
    res.status(404).json({ message: game.getState() });

    return;
  }

  res.status(200).json({ game });
}

// TO-DO add logic to add/remove flag, add/remove question mark, uncover cell
// TO-DO add logic to calculate an add time used in each response (maybe a helper)

module.exports = {
  getAll,
  getGame,
  createGame,
  revealCell,
  deleteGame,
};
