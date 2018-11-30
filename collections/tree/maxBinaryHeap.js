class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let i = this.values.length - 1;
        while(true){
            let parentInd = Math.floor((i - 1)/2);
            if(parentInd < 0 || this.values[i] <= this.values[parentInd]) break;
            if(this.values[i] > this.values[parentInd]) {
                [this.values[i], this.values[parentInd]] =  [this.values[parentInd], this.values[i]];
                i = parentInd;
            }
        }   
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.trickleDown();
        }
        return max;
    }

    trickleDown(){
        let i = 0;
        const length = this.values.length;
        const element = this.values[0]
        while(true){
            let leftChildPos = 2 * i + 1;
            let rightChildPos = 2 * i + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildPos < length){
                leftChild = this.values[leftChildPos];
                if(leftChild > element){
                    swap = leftChildPos;
                }
            }
            if(rightChildPos < length){
                rightChild = this.values[rightChildPos];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildPos;
                } 
            }
            if(swap === null) break;
            this.values[i] = this.values[swap];
            this.values[swap] = element
            i = swap;
        }
    }
}

module.exports = MaxBinaryHeap;