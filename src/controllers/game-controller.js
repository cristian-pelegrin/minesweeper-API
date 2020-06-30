const errorMessages = require('../constants/error-messages');
const gameService = require('../services/game-service');
const boardService = require('../services/board-service');

function getAll(req, res) {
  const games = gameService.get();
  res.status(200).json(games);
}

function getGame(req, res) {
  const gameId = req.params.id;
  if (!gameId) res.status(400).json({ message: errorMessages.WRONG_PARAMS });
  const game = gameService.get(gameId);
  if (game === undefined) res.status(404).json({ message: errorMessages.GAME_NOT_FOUND });
  res.status(200).json({ game });
}

function createGame(req, res) {
  // TO-DO add start time attribute
  const levelId = req.body.level || 1;

  const newBoard = boardService.create({ levelId });

  const testGame = {
    level: levelId,
    state: 'active',
    board: newBoard,
  };
  const newGame = gameService.create(testGame);
  res.status(200).json({ game: newGame });
}

function deleteGame(req, res) {
  const gameId = req.body.id;
  if (!gameId) res.status(400).json({ message: errorMessages.WRONG_PARAMS });
  if (!gameService.remove(gameId)) res.status(404).json({ message: errorMessages.GAME_NOT_FOUND });
  res.status(200).json({ success: true });
}

function modifyGame(req, res) {
  // TO-DO add logic to add/remove flag, add/remove question mark, uncover cell
  // TO-DO add logic to uncover all empty cells after uncover one (analyze if a new cell model is needed)
  // TO-DO add logic to change state of game to game-over or finished if a mine is uncover
  // TO-DO add logic to calculate an add time used in each response (maybe a helper)
}

module.exports = {
  getAll,
  getGame,
  createGame,
  modifyGame,
  deleteGame,
};
