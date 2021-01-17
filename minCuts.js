const graph = require('./kargerMinCut.js');
const smallgraph = require('./smallgraph.js');

const minCut = (graph, u = null) => {
  const keys = Object.keys(graph);
  const len = keys.length;
  if (len === 2) return;
  if (!u) u = keys[Math.floor(Math.random() * len)];
  let v = null;
  do {
    v = keys[Math.floor(Math.random() * len)];
  } while (v === u);
  graph[u] = [...graph[u], ...graph[v]];
  graph[u].splice(graph[u].indexOf(parseInt(v)), 1);
  delete graph[v];
  let index = null;
  do {
    index = graph[u].indexOf(parseInt(u));
    if (index !== -1) {
      graph[u].splice(index, 1);
    }
  } while (index !== -1);
  minCut(graph, u);
  return graph[u].length;
};

let results = [];
for (let i = 0; i < 40000; i++) {
  const newGraph = Object.assign({}, graph);
  const result = minCut(newGraph);
  results.push(result);
}
console.log(Math.min(...results));
