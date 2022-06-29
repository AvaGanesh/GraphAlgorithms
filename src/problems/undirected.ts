import {adjacencyMatrix} from './dfs';

/**
 *
 *  {@link http://structy.net/problems/undirected-path  undirectedPath} - Link to problem statement
 * @param {string[][]} edges - edges of a graph
 * @param {string} nodeA
 * @param {string} nodeB
 */
export const undirectedPath = (
  edges: string[][],
  nodeA: string,
  nodeB: string
): boolean => {
  const graph = buildGraph(edges);
  console.log(graph);
  return hasPath(graph, nodeA, nodeB, new Set());
};

/**
 * @description Builds an adjacency matrix from the edges defined
 * @param {string[][]} edges - edges of a graph 
 * @returns {adjacencyMatrix} - adjacency matrix
 */
export const buildGraph = (edges: string[][]): adjacencyMatrix<string> => {
  const graph: adjacencyMatrix<string> = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

/**
 *
 * @param {adjacencyMatrix<string>} graph - adjacencyMatrix of the graph
 * @param {string} src - source node
 * @param {string} dest - destination node
 * @param {Set<string>} visited - maintaining a visited set inorder to avoid an infinite loop
 * @returns {boolean} - returns whether `dest` is reachable from `src` 
 */
const hasPath = (
  graph: adjacencyMatrix<string>,
  src: string,
  dest: string,
  visited: Set<string>
): boolean => {
  if (src === dest) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dest, visited)) return true;
  }

  return false;
};
