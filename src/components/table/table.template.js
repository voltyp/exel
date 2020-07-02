const CODES = {
  A: 65,
  Z: 90
};

function toColumn(name, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
      ${name}
      <div class="col-resize" data-resize="col"></div>
    </div>
    
  `;
}
function createRow(index, content) {
  const resizer = index ? '<div class="row-resize" data-resize="row"></div>':'';
  return `<div class="row" data-type="resizable">
            <div class="row-info"> 
              ${index ? index : ''}
              ${resizer}
            </div>
            <div class="row-data">${content}</div>
          </div>`;
}
function toCell(_, col) {
  return `<div class="cell" contenteditable="" data-col="${col}"></div>`;
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
      .map(toColumn)
      .join('');

  // Создаем заданное кол-во строк.
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('');

    (i === 0) ? rows.push(createRow(i, cols)): rows.push(createRow(i, cells));
  }

  return rows.join('');
}
