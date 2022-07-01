import {buildGraph} from './undirected';

/**
 * @description - Find shortest path between two given nodes
 * {@link https://structy.net/problems/shortest-path  shortestPath} - Link to problem statement
 * @param {string[][]} edges - edges of the graph
 * @param {string} nodeA - starting node
 * @param {string} nodeB - destination node
 * @returns {number} number - shortest distance between `nodeA` and `nodeB`
 *
 * @remarks Uses BFS to calculate shortest distance
 */
export const shortestPath = (
  edges: string[][],
  nodeA: string,
  nodeB: string
): number => {
  const graph = buildGraph(edges);
  const visited = new Set([nodeA]);
  // queue maintains the node and distance from starting node to current node
  const queue = [{node: nodeA, distance: 0}];
  while (queue.length > 0) {
    const nodeDetails = queue.shift();

    // when current node reaches destination node return distance
    if (nodeDetails?.node === nodeB) return nodeDetails.distance;

    if (nodeDetails?.node) {
      for (let neighbor of graph[nodeDetails?.node]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push({node: neighbor, distance: nodeDetails.distance + 1});
        }
      }
    }
  }
  return -1;
};
