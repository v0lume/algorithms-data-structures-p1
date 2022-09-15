import { IDijkstra, Path, WeightedGraph } from "./types";
import { Vertex } from "./Vertex";

export class Dijkstra implements IDijkstra<Vertex> {
    graph: WeightedGraph<Vertex>;

    constructor(graph: WeightedGraph<Vertex>) {
        this.graph = graph;
    }

    findShortestPath(vertex1: Vertex, vertex2: Vertex): Path {
        return { path: [], distance: Infinity };
    }

    findAllShortestPaths(vertex: Vertex): Record<string, Path> {
        return {
            '1': { path: [], distance: Infinity },
        };
    }
}