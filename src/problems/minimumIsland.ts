export const minimumIsland = (grid: string[][]): number => {
  const visited = new Set<string>();

  let minSize = Infinity;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const size = exploreSize(grid, r, c, visited);
      if (size > 0 && size < minSize) {
        minSize = size;
      }
    }
  }
  return minSize;
};

const exploreSize = (
  grid: string[][],
  r: number,
  c: number,
  visited: Set<string>
): number => {
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds = 0 <= c && c < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;

  if (grid[r][c] === 'W') return 0;

  const pos = r + 'x' + c;
  if (visited.has(pos)) return 0;
  visited.add(pos);

  let size = 1;

  size += exploreSize(grid, r - 1, c, visited); // go up
  size += exploreSize(grid, r + 1, c, visited); // go down
  size += exploreSize(grid, r, c + 1, visited); // go right
  size += exploreSize(grid, r, c - 1, visited); // go left

  return size;
};
