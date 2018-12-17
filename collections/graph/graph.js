// undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;
        while (this.adjacencyList[vertex].length) {
            const adjancencyV = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjancencyV);
        }
        delete this.adjacencyList[vertex];
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(ver => ver !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(ver => ver !== vertex1);
    }
}

module.exports = Graph;