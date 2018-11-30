class MinBinaryHeap{
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
            if(parentInd < 0 || this.values[i] >= this.values[parentInd]) break;
            if(this.values[i] < this.values[parentInd]) {
                [this.values[i], this.values[parentInd]] =  [this.values[parentInd], this.values[i]];
                i = parentInd;
            }
        }   
    }

    extractMin(){
        const min = this.values[0];
        const end = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = end;
            this.trickleDown();
        }
        return min;
    }

    trickleDown(){
        let i = 0;
        while(true){
            let leftChildPos = (i * 2) + 1;
            let rightChildPos = (i * 2) + 2;
            let swap = null;
            if(leftChildPos < this.values.length){
                if(this.values[leftChildPos] < this.values[i]){
                    swap = leftChildPos;
                }
            }
            if(rightChildPos < this.values.length){
                if(
                    (swap === null && this.values[rightChildPos] < this.values[i]) ||
                    (swap !== null && this.values[rightChildPos] < this.values[leftChildPos])){
                        swap = rightChildPos;
                    }
            }
            if(swap === null) break;
            [this.values[swap], this.values[i]] = [this.values[i], this.values[swap]];
            i = swap;
        }
    }
}