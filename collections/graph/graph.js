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

    dfsRecursive(start){
        const results = [];
        const visited = {};
        const dfsHelper = (vertex) => {
            if(!vertex) return;
            visited[vertex] = true;
            results.push(vertex)
            this.adjacencyList[vertex].forEach(ver => {
                if(!visited[ver]){
                    return dfsHelper(ver)
                }
            });
        }
        dfsHelper(start)
        return results;
    }
    dfsIterative(start){
        let s = [start];
        const results = [];
        const visited = {};
        let vertex;
        while(s.length > 0){
            vertex = s.pop();
            if(!vertex) return results;
            if(!visited[vertex]){
                visited[vertex] = true;
                results.push(vertex);
                s = [...s, ...this.adjacencyList[vertex]];
            }
        }
        return results;
    }

    bfsIterative(start){
        let queue = [start];
        const results = [];
        const visited = {};
        let vertex;
        while(queue.length > 0){
            vertex = queue.shift();
            if(!vertex) return results;
            if(!visited[vertex]){
                visited[vertex] = true;
                results.push(vertex);
                queue = [...queue, ...this.adjacencyList[vertex]]
            }

        }
        return results;
    }
}

module.exports = Graph;