function buildEmptyCells(cellDefinition, boardSize) {
  const emptyCells = {};
  for (let y = 0; y < boardSize.y; y += 1) {
    const rows = {};
    for (let x = 0; x < boardSize.x; x += 1) {
      rows[x] = new cellDefinition();
    }
    emptyCells[y] = rows;
  }

  return emptyCells;
}

function increaseWarningIfCandidate(cells, neighbourPosition) {
  const { row, column } = neighbourPosition;
  const cell = cells[row][column];
  console.log(neighbourPosition);
  console.log(cell);
  if (!cell || cell.getHasMine()) return cells;
  cells[row][column].setWarnings(cell.getWarnings() + 1);
  console.log('SET WARNING');

  return cells;
}

function calculateNeighborsWarnings(cells, cellPosition) {
  const { row: rowPos, column: columnPos } = cellPosition;
  let cellsWithWarnings = cells;
  cellsWithWarnings = increaseWarningIfCandidate(cellsWithWarnings, { row: rowPos - 1, column: columnPos - 1 });
  cellsWithWarnings = increaseWarningIfCandidate(cellsWithWarnings, { row: rowPos - 1, column: columnPos });
  cellsWithWarnings = increaseWarningIfCandidate(cellsWithWarnings, { row: rowPos - 1, column: columnPos + 1 });
  cellsWithWarnings = increaseWarningIfCandidate(cellsWithWarnings, { row: rowPos, column: columnPos + 1 });
  cellsWithWarnings = increaseWarningIfCandidate(cellsWithWarnings, { row: rowPos + 1, column: columnPos + 1 });
  cellsWithWarnings = increaseWarningIfCandidate(cellsWithWarnings, { row: rowPos + 1, column: columnPos });
  cellsWithWarnings = increaseWarningIfCandidate(cellsWithWarnings, { row: rowPos + 1, column: columnPos - 1 });
  cellsWithWarnings = increaseWarningIfCandidate(cellsWithWarnings, { row: rowPos, column: columnPos - 1 });

  return cellsWithWarnings;
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
      cellsWithMinesAndWarnings = calculateNeighborsWarnings(cellsWithMinesAndWarnings, { row, column });
      minesAssignee += 1;
    }
  } while (minesAssignee !== boardSize.mines);

  return cellsWithMinesAndWarnings;
}

function buildCells(cellDefinition, boardSize) {
  const emptyCells = buildEmptyCells(cellDefinition, boardSize);

  return addMinesAndWarningsToCells(emptyCells, boardSize);
}

module.exports = {
  buildCells,
};
