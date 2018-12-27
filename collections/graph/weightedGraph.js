const PriorityQueue = require("../queue/priorityQueue");

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];
        let smallest;
        // setup
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while (nodes.length > 0) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                // build path to return
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                path.push(smallest);
                break;
            }
            if (smallest || distance[smallest] !== Infinity) {
                // loop through each neighbour
                this.adjacencyList[smallest].forEach(neighbour => {
                    // calculate distance to neighbor node
                    let candidate = distances[smallest] + neighbour.weight;
                    // check if the candidate distance is less than the current recoreded distance
                    if (candidate < distances[neighbour.node]) {
                        // update the new distance from smallest to neighbour
                        distances[neighbour.node] = candidate;
                        // update the neighbour previous
                        previous[neighbour.node] = smallest;
                        // add to priority queue with the new priority
                        nodes.enqueue(neighbour.node, candidate);
                    }
                });
            }
        }
        return path.reverse();
    }
}
module.exports = WeightedGraph;