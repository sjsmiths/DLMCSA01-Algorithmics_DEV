class Graph {
    constructor (nbn) {
        this.#nbOfNodes = nbn;
        this.#nodeNames = new Array(nbn);
        this.#weights = new Array(nbn);
        for(let i=0 ;i<=nbn; i++)
            this.#weights[i] = new Array(nbn);
    }

    #nbOfNodes = 0;
    #nodeNames = [];
    #weights = [];

    getNbOfNodes(){
        return this.#nbOfNodes;
    }

    getElementInNode(pos) {
        if ( pos >= 0 && pos < this.#nodeNames.length )
            return this.#nodeNames[pos];
        else
            return undefined;
    }

    putElementInNode(e,pos) { // label?
        if ( pos>=0 && pos< this.#nodeNames.length ){
            this.#nodeNames[pos] = e;
        }
    }

    putWeightBtwNodes(weight, orig,dest) { // connect?
        let n = this.#nbOfNodes;
        let c1 = (orig >= 0 && orig < n);
        let c2 = (dest >= 0 && dest < n);
        if (c1 && c2) {
            this.#weights[orig][dest] = weight;
        }
    }

    toString() {
        var s = " names: \n";
        var n = this.#nbOfNodes;
        for (let i=0; i<n; i++){
            if (this.#nodeNames[i] !== undefined) {
                s = s + i + " : " + ((this.#nodeNames)[i]) + "\n";
            }
        }
        s = s + "\nweights:\n";
        for (let i=0; i<n; i++){
            for (let j=0; j<n; j++){
                if ( this.#weights[i][j] !== undefined )
                    s=s+".("  + this.#nodeNames[i]
                        +"->" + this.#nodeNames[j] +" : "+ this.#weights[i][j]+").";
            }
        }
        return s;
    }

}

console.log("Let's build a cyclic graph of size 7")
let graph = new Graph(7);
for ( let i=0; i<7; i++) graph.putElementInNode(String.fromCharCode(65+i), i);
for ( let i=0; i<7; i++) graph.putWeightBtwNodes(i%3, i, i+1);
console.log(`Graph: ${graph}`)

console.log("Let's build a complete graph of size 4");
graph = new Graph(4);
for ( let i=0; i<4; i++) graph.putElementInNode(String.fromCharCode(65+i), i);
for ( let i=0; i<4; i++) {
    for ( let j=0; j<4; j++)
        graph.putWeightBtwNodes(1, i, j);
}
console.log(`Graph: ${graph}`)
