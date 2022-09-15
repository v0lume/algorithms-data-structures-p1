export interface WeightedGraph<T> {
    addVertex(vertex2: T): void;

    addEdge(vertex1: T, vertex2: T, weight: number): void;
}