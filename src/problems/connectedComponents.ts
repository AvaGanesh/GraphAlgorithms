import {adjacencyMatrix} from './dfs';

export const connectedComponents = (graph: adjacencyMatrix<number>): number => {
  const visited = new Set<number>();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, parseInt(node), visited) === true) {
      count += 1;
    }
  }
  return count;
};

const explore = (
  graph: adjacencyMatrix<number>,
  current: number,
  visited: Set<number>
): boolean => {
  if (visited.has(current)) return false;

  visited.add(current);

  for (let neighbor of graph[current]) {
    explore(graph, neighbor, visited);
  }
  return true;
};
