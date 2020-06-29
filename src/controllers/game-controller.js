const errorMessages = require('../constants/error-messages');
const gameModel = require('../models/game-model');

function getAll(req, res) {
  const games = gameModel.get();
  res.status(200).json(games);
}

function getGame(req, res) {
  const gameId = req.params.id;
  if (!gameId) res.status(400).json({ message: errorMessages.WRONG_PARAMS });
  const game = gameModel.get(gameId);
  if (game === undefined) res.status(404).json({ message: errorMessages.GAME_NOT_FOUND });
  res.status(200).json({ game });
}

function createGame(req, res) {
  // TO-DO add size configuration by level (create a file with size configuration constants)
  // TO-DO add logic to create size game using level send by params (create a new service file with logic)
  // TO-DO add logic to calculate warnings (create a new service file with logic)
  // TO-DO add mines, warning and hidden info to game
  // TO-DO add start time attribute
  const testGame = {
    level: 1,
    state: 'active',
    size: { x: 8, y: 8 },
  };
  const game = gameModel.create(testGame);
  res.status(200).json({ game });
}

function deleteGame(req, res) {
  const gameId = req.body.id;
  if (!gameId) res.status(400).json({ message: errorMessages.WRONG_PARAMS });
  if (!gameModel.remove(gameId)) res.status(404).json({ message: errorMessages.GAME_NOT_FOUND });
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
