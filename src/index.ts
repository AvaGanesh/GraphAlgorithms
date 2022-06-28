import {breadthFirstSearch} from './problems/bfs';
import {
  adjacencyMatrix,
  depthFirstPrint,
  depthFirstPrintRecursive,
} from './problems/dfs';
import {hasPathBFS, hasPathDFS} from './problems/hasPath';
import { undirectedPath } from './problems/undirected';

const graph: adjacencyMatrix = {
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

const hasPathGraph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

console.log('hasPathDFS f -> k', hasPathDFS(hasPathGraph, 'f', 'k'));
console.log('hasPathDFS f -> j', hasPathDFS(hasPathGraph, 'f', 'j'));

console.log('hasPathBFS f -> k', hasPathBFS(hasPathGraph, 'f', 'k'));
console.log('hasPathBFS f -> j', hasPathBFS(hasPathGraph, 'f', 'j'));


const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];


console.log(undirectedPath(edges, 'j', 'm'));
