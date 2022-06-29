import {breadthFirstSearch} from './problems/bfs';
import { connectedComponents } from './problems/connectedComponents';
import {
  adjacencyMatrix,
  depthFirstPrint,
  depthFirstPrintRecursive,
} from './problems/dfs';
import {hasPathBFS, hasPathDFS} from './problems/hasPath';
import { largestComponent } from './problems/largestComponent';
import { shortestPath } from './problems/shortestPath';
import { undirectedPath } from './problems/undirected';

const graph: adjacencyMatrix<string> = {
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


console.log('undirectedPath', undirectedPath(edges, 'j', 'm'));


const connectedGraph = {
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
};

console.log('connectedGraph', connectedComponents(connectedGraph));

console.log('largestComponent', largestComponent(connectedGraph));



console.log('shortestPath', shortestPath([
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
], 'w', 'z'), 'w', 'z');