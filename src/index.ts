import {breadthFirstSearch} from './problems/bfs';
import {
  adjacencyGraph,
  depthFirstPrint,
  depthFirstPrintRecursive,
} from './problems/dfs';

const graph: adjacencyGraph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

console.log('DFS - Iterative');
depthFirstPrint(graph, 'a');
console.log('DFS - Recursive');
depthFirstPrintRecursive(graph, 'a');

console.log('BFS - Iterative');
breadthFirstSearch(graph, 'a');
