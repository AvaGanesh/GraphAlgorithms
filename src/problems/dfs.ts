/**
 * @param graph : Dict of node with corresponding adjacency list
 * @param source : source node
 */

export type adjacencyGraph = {
  [node: string]: string[];
};

export const depthFirstPrint = (graph: adjacencyGraph, source: string) => {
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
  graph: adjacencyGraph,
  source: string
) => {
  console.log(source);
  for (const neighbor of graph[source]) {
    depthFirstPrintRecursive(graph, neighbor);
  }
};
