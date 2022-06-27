import {adjacencyGraph} from './dfs';

export const breadthFirstSearch = (graph: adjacencyGraph, source: string) => {
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
