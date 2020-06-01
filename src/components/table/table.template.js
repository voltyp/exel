const CODES = {
  A: 65,
  Z: 90
};
let firstRow = '';
let cellEmpty = '';
let rowAll = ` `;

function toCollumn(name) {
  return `<div class="column">${name}</div>`;
}
function createRow(index, content) {
  return `<div class="row">
            <div class="row-info">${index ? index : ''}</div>
            <div class="row-data">${content}</div>
          </div>`;
}
function createCell(content) {
  return `<div class="cell" contenteditable="">${content}</div>`;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}
export function createTable(rowsCount = 25) {
  // Получаем колл-во букв
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toCollumn)
      .join('');

  // Создаем заданное кол-во строк.
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('');

    (i === 0) ? rows.push(createRow(i, cols)): rows.push(createRow(i, cells));
  }

  return rows.join('');
}
