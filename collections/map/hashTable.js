class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    set(key, val){
        const hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]){
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key, val]);
    }

    get(key){
        const hashedKey = this._hash(key);
        const vals = this.keyMap[hashedKey];
        if(!vals) return vals;
        return vals.find(ele => ele[0] === key)[1];
    }

    values(){
        let values = [];
        this.keyMap
            .filter(ele => ele)
            .forEach(eles => {
                eles.map(pair => {
                    if(!values.includes(pair[1])){
                        values.push(pair[1]);
                    }
                })
            });
        return values
    }

    keys(){
        let values = [];
        this.keyMap
            .filter(ele => ele)
            .forEach(eles => {
                eles.map(pair => {
                    if(!values.includes(pair[0])){
                        values.push(pair[0]);
                    }
                })
            });
        return values
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        // use the first 100 characters at most
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
}

module.exports = HashTable;