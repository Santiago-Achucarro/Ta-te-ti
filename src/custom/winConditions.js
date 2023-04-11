const winConditions = [
  [0, 1, 2], // fila superior
  [3, 4, 5], // fila del medio
  [6, 7, 8], // fila inferior
  [0, 3, 6], // columna izquierda
  [1, 4, 7], // columna del medio
  [2, 5, 8], // columna derecha
  [0, 4, 8], // diagonal izquierda a derecha
  [2, 4, 6], // diagonal derecha a izquierda
];

export { winConditions };
