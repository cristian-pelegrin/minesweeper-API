const errorMessages = require('../constants/error-messages');
const gameService = require('../services/game-service');
const boardService = require('../services/board-service');
const { isInValidPUTRequest, isGameAvailable } = require('../helpers/game-controller-helpers');
const { boardActions } = require('../models/board-model');

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

function modify(req, res, action) {
  if (isInValidPUTRequest(req)) {
    res.status(400).json({ message: errorMessages.WRONG_PARAMS });

    return;
  }
  const modifyParams = {
    position: req.body.position,
    value: (typeof (req.body.value) === 'boolean') ? req.body.value : null,
  };
  const game = gameService.modify(action, modifyParams, Number(req.body.id));
  if (!game.id) {
    res.status(404).json({ message: errorMessages.GAME_NOT_FOUND });

    return;
  }
  if (!isGameAvailable(game)) {
    res.status(404).json({ message: game.getState() });

    return;
  }

  res.status(200).json({ game });
}

function revealCell(req, res) {
  return modify(req, res, boardActions.REVEAL_CELL);
}

function markFlag(req, res) {
  return modify(req, res, boardActions.FLAG_CELL);
}

function markQuestion(req, res) {
  return modify(req, res, boardActions.QUESTION_MARK_CELL);
}

// TO-DO add logic to calculate an add time used in each response (maybe a helper)

module.exports = {
  getAll,
  getGame,
  createGame,
  revealCell,
  markFlag,
  markQuestion,
  deleteGame,
};
