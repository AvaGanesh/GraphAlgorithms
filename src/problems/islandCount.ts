/**
 * 
 * @param {string[][]} grid - graph grid 
 * @returns total islands count
 */
export const islandCount = (grid: string[][]): number => {
  let count = 0;
  let visited = new Set<string>();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (explore(grid, r, c, visited)) {
        count += 1;
      }
    }
  }

  return count;
};

const explore = (
  grid: string[][],
  r: number,
  c: number,
  visited: Set<string>
): boolean => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid.length;
  if (!rowInBounds || !colInBounds) return false;

  if (grid[r][c] === 'W') return false;

  const pos = r + 'x' + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited); // go up
  explore(grid, r + 1, c, visited); // go down
  explore(grid, r, c + 1, visited); // go right
  explore(grid, r, c - 1, visited); // go left

  return true;
};
