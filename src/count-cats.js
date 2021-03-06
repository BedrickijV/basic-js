module.exports = function countCats(matrix) {
  let arr = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "^^") {
          arr.push(matrix[i][j])
        }
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        if (matrix[i][j] === "^^") {
          arr.push(matrix[i][j])
        }
      }
    }

  }
  return arr.length;
};
