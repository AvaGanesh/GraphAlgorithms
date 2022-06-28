import {adjacencyMatrix} from './dfs';

/**
 * @function breadthFirstSearch -  implemented iteratively using queue 
 * @param {adjacencyMatrix} graph - adjacency list of the graph
 * @param {string} source - starting point
 */
export const breadthFirstSearch = (graph: adjacencyMatrix, source: string) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    if (current && graph[current]) {
      for (const neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }
  }
};
