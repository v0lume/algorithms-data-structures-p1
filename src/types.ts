export interface WeightedGraph<T> {
    vertices: T[];

    addVertex(vertex2: T): void;

    addEdge(vertex1: T, vertex2: T, weight: number): void;
}

export interface Path {
    path: string[];
    distance: number;
}
  
export interface IDijkstra<T> {
    findShortestPath(vertex1: T, vertex2: T): Path;
    findAllShortestPaths(vertex: T): Record<string, Path>;
}