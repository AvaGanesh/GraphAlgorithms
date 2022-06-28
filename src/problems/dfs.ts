/**
 * @param graph : Dict of node with corresponding adjacency list
 * @param source : source node
 */

export type adjacencyMatrix = {
  /**
   * node : adjacent nodes
   */
  [node: string]: string[];
};

export const depthFirstPrint = (graph: adjacencyMatrix, source: string) => {
  const stack = [source];

  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    if (current && graph[current]) {
      for (const neighbor of graph[current]) {
        stack.push(neighbor);
      }
    }
  }
};

export const depthFirstPrintRecursive = (
  graph: adjacencyMatrix,
  source: string
) => {
  console.log(source);
  for (const neighbor of graph[source]) {
    depthFirstPrintRecursive(graph, neighbor);
  }
}; 
