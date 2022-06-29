import {adjacencyMatrix} from './dfs';

/**
 *
 * {@link https://structy.net/problems/largest-component longestComponent} - Link to problem statement
 *
 * @param {adjacencyMatrix<string>} graph
 * @returns longest component for the given graph
 */
export const largestComponent = (graph: adjacencyMatrix<number>): number => {
  let longest = 0;
  const visited = new Set<number>();
  for (let node in graph) {
    // exploreSize returns size of each connected component, update longest based on it
    let size = exploreSize(graph, parseInt(node), visited);
    if (size > longest) {
      longest = size;
    }
  }
  return longest;
};

/**
 * 
 * @param {adjacencyMatrix<number>} graph - adjacency matrix of the graph 
 * @param {number} node  
 * @param {Set<number>} visited - Maintains a set to check if nodes are already visited
 * @returns - size of connected component for given node
 */
const exploreSize = (
  graph: adjacencyMatrix<number>,
  node: number,
  visited: Set<number>
) => {
  if (visited.has(node)) return 0;

  visited.add(node);

  let size = 1;

  // do a recursive call for size of each nodes of a graph
  for (let neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
};
