import { Edge } from './Edge';
import { Graph } from './Graph';
import { Vertex } from './Vertex';
import { WeightedGraph } from './WeightedGraph';

const vertex1 = new Vertex('1');
const vertex2 = new Vertex('2');
const vertex3 = new Vertex('3');
const vertex4 = new Vertex('4');
const vertex5 = new Vertex('5');

describe('WeightGraph', () => {
    it('should work properly', () => {
        const vertices = [
          vertex1,
          vertex2,
          vertex3,
          vertex4,
          vertex5,
        ];

        const edges = [
          new Edge(vertex1, vertex4, 3),
          new Edge(vertex1, vertex2, 5),
          new Edge(vertex1, vertex3, 4),
          new Edge(vertex2, vertex4, 6),
          new Edge(vertex2, vertex3, 5),
        ];

        const graph = new Graph();
        
        vertices.forEach(verticle => graph.addVertex(verticle));
        edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));

        expect(graph.toStringVertices()).toEqual('1,2,3,4,5');
        expect(graph.toStringEdges()).toEqual('(1,4):3, (1,2):5, (1,3):4, (2,4):6, (2,3):5');
    });
});
