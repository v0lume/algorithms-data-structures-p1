import { Edge } from "./Edge";
import { Vertex } from "./Vertex";
import { WeightedGraph } from "./WeightedGraph";

export class Graph implements WeightedGraph<Vertex> {
    vertices: Vertex[] = [];
    edges: Edge[] = [];

    addVertex(vertex: Vertex) {
        this.vertices.push(vertex);
    }

    addEdge(from: Vertex, to: Vertex, weight: number) {
        this.edges.push(new Edge(from, to, weight));
    }

    toStringVertices() {
        return this.vertices.map(vertex => vertex.key).join(',');
    }

    toStringEdges() {
        return this.edges.map(edge => `(${edge.from.key},${edge.to.key}):${edge.weight}`).join(', ');
    }
}
