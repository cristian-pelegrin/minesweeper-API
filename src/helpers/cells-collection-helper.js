function buildEmptyCells(cellDefinition, boardSize) {
  const emptyCells = {};
  for (let y = 0; y < boardSize.y; y += 1) {
    const rows = {};
    for (let x = 0; x < boardSize.x; x += 1) {
      // eslint-disable-next-line new-cap
      rows[x] = new cellDefinition();
    }
    emptyCells[y] = rows;
  }

  return emptyCells;
}

function cellNeighbors(cellPosition, boardSize) {
  const { row: cellRow, column: cellColumn } = cellPosition;
  const neighbors = [];

  const isInsideBoard = (pos) => (pos.row > -1 && pos.row < boardSize.x && pos.column > -1 && pos.column < boardSize.y);
  const addIfValid = (position) => { if (isInsideBoard(position)) neighbors.push(position); };

  const rowLessOne = cellRow - 1;
  const rowPlusOne = cellRow + 1;
  const columnLessOne = cellColumn - 1;
  const columnPlusOne = cellColumn + 1;

  addIfValid({ row: rowLessOne, column: columnLessOne });
  addIfValid({ row: rowLessOne, column: cellColumn });
  addIfValid({ row: rowLessOne, column: columnPlusOne });
  addIfValid({ row: cellRow, column: columnLessOne });
  addIfValid({ row: cellRow, column: columnPlusOne });
  addIfValid({ row: rowPlusOne, column: columnLessOne });
  addIfValid({ row: rowPlusOne, column: cellColumn });
  addIfValid({ row: rowPlusOne, column: columnPlusOne });

  return neighbors;
}

function calculateNeighborsWarnings(cellPosition, boardSize, cells) {
  const neighbors = cellNeighbors(cellPosition, boardSize);
  neighbors.forEach((n) => {
    if (cells[n.row][n.column].getHasMine()) return;
    const newWarnings = cells[n.row][n.column].getWarnings() + 1;
    cells[n.row][n.column].setWarnings(newWarnings);
  });

  return cells;
}

function printBoard(cells) {
  console.log('-------', 'NEW BOARD', '--------------');
  Object.keys(cells).forEach((row) => {
    let board = '|';
    Object.keys(cells[row]).forEach((column) => {
      board += `${cells[row][column].getStringRepresentation()}|`;
    });
    console.log(board);
  });
  console.log('--------------------------------------');
}

function addMinesAndWarningsToCells(cells, boardSize) {
  let cellsWithMinesAndWarnings = cells;
  let minesAssignee = 0;
  do {
    const row = Math.round(Math.random() * (boardSize.x - 1));
    const column = Math.round(Math.random() * (boardSize.y - 1));
    if (!cellsWithMinesAndWarnings[row][column].getHasMine()) {
      cellsWithMinesAndWarnings[row][column].setHasMine(true);
      cellsWithMinesAndWarnings[row][column].setWarnings(0);
      cellsWithMinesAndWarnings = calculateNeighborsWarnings({ row, column }, boardSize, cellsWithMinesAndWarnings);
      minesAssignee += 1;
    }
  } while (minesAssignee !== boardSize.mines);

  return cellsWithMinesAndWarnings;
}

function revealSafeNeighbors(position, cells, size) {
  const { row, column } = position;
  const neighbors = cellNeighbors(position, size);
  neighbors.forEach((n) => {
    if (!cells[n.row][n.column].getHidden()) return;
    const { warnings } = cells[row][column].reveal();
    if (warnings) return;
    revealSafeNeighbors({ row: n.row, column: n.column }, cells, size);
  });

  return cells;
}

function buildCells(cellDefinition, boardSize) {
  const emptyCells = buildEmptyCells(cellDefinition, boardSize);

  return addMinesAndWarningsToCells(emptyCells, boardSize);
}

function revealCell(params, cells, size) {
  const { position } = params;
  const { mine, warnings } = cells[position.row][position.column].reveal();
  if (mine) return { result: false, cells };
  if (warnings) return { result: true, cells };
  const newCells = revealSafeNeighbors(position, cells, size);

  return { result: true, cells: newCells };
}

module.exports = {
  buildCells,
  revealCell,
  printBoard,
};
