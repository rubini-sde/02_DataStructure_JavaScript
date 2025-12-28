// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

// Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
// Output: 1
// Explanation: There is 1 equal row and column pair:
// - (Row 2, Column 1): [2,7,7]

// Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
// Output: 3
// Explanation: There are 3 equal row and column pairs:
// - (Row 0, Column 0): [3,1,2,2]
// - (Row 2, Column 2): [2,4,2,2]
// - (Row 3, Column 2): [2,4,2,2]

// Constraints:

// n == grid.length == grid[i].length
// 1 <= n <= 200
// 1 <= grid[i][j] <= 105

function equalPairs(grid: number[][]): number {
  let count = 0;
  const n = grid.length;

  // Store all rows in a map

  const rowMap = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    const key = grid[i].join(",");
    rowMap.set(key, (rowMap.get(key) || 0) + 1);
  }

  // Iterate through columns to see if there is a matching row

  for (let col = 0; col < n; col++) {
    let colArray: number[] = [];
    for (let row = 0; row < n; row++) {
      colArray.push(grid[row][col]);
    }
    let key = colArray.join(",");
    if (rowMap.has(key)) {
      count += rowMap.get(key)!;
    }
  }

  return count;
}
