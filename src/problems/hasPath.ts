import {adjacencyMatrix} from './dfs';

/**
 * Implemented using DFS algorithm - recursive soln
 * 
 * {@link https://structy.net/problems/has-path  hasPath} - Link to problem statement
 * 
 * @param {adjacencyMatrix} graph - An adjacency list
 * @param {string} src - starting node
 * @param {string} dest - destination node
 * @returns {boolean} - whether destination is reachable from src
 */
export const hasPathDFS = (
  graph: adjacencyMatrix,
  src: string,
  dest: string
): boolean => {
  if (src === dest) return true;

  for (let neighbor of graph[src]) {
    if (hasPathDFS(graph, neighbor, dest)) return true;
  }

  return false;
};


/**
 * Implemented using BFS algorithm - iterative soln
 * @param {adjacencyMatrix} graph - An adjacency list
 * @param {string} src - starting node
 * @param {string} dest - destination node
 * @returns {boolean} - whether destination is reachable from src
 */
export const hasPathBFS = (
  graph: adjacencyMatrix,
  src: string,
  dest: string
): boolean => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === dest) return true;
    if (current && graph[current]) {
      for (let neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }
  }
  return false;
};
