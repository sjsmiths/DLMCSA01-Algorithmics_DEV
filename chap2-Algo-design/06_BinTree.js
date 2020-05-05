class BinTree {
    constructor (lev) {
        this.#levels = lev;
        // initialize with the number of slots
        this.#slots = new Array(this.getTTNbOfElements());
    }

    #levels = 0;
    #slots = [];

    getTTNbOfElements(){
        var pw = Math.pow(2, this.#levels);
        return (Math.floor(pw))-1;
    }

    getElementInNode(p) {
        if ( p >= 0 && p < this.#slots.length )
            return this.#slots[p];
        else
            return undefined;
    }

    putElementInNode(e, pos) {
        if ( pos === 0 )
            this.#slots[pos] = e;
        else {
            if ( pos > 0 && pos < this.#slots.length) {
                var parPos = 0;
                if ( pos % 2 === 0 )
                    parPos = (Math.floor(pos/2)) - 1;
                else
                    parPos = Math.floor((pos-1)/2);
                if ( this.getElementInNode(parPos) !== undefined )
                    this.#slots[pos] = e;
            }
        }
    }

    // TODO: this representation does not show the parent relationships
    toString() {
        var s = "BinTree ";
        for (var i = 0; i< this.#slots.length; i++) {
            if ( this.#slots[i] !== undefined ) {
                s = s + "| |" + i + ": " + this.#slots[i];
            }
        }
        return s;
    }

}


console.log("lets create a binary tree of level 4");
let bt = new BinTree(4);
console.log(`Now: ${bt}`);
console.log("Populating");
for(let i=0, spa = bt.getTTNbOfElements(); i < spa; i++)
    bt.putElementInNode(String.fromCharCode(65 + i), i);
console.log(`Here it is ${bt}.`)
// TODO: a method to delete?