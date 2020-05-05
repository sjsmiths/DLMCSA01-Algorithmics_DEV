// very similar to ListCursor except that you can't move the cursor
// ... and that add inserts at beginning while get reads from the end

class Queue {
    #cursor = null;
    #endCursor = null;
    #size = 0;

    constructor (earlier) {
        if(earlier) {
            if(! earlier instanceof Queue)  throw new Error("Only previous queues in constructor.");
            this.#cursor = earlier.#cursor;
            this.#endCursor = earlier.#endCursor;
            this.#size = earlier.#size;
        }
    }
    get() {
        if(this.#endCursor) {
            return this.#endCursor.value;
        } else return undefined;

    }

    retrieve() {
        let endCursor = this.#endCursor;
        if( this.#size === 1) {
            this.#endCursor = this.#cursor = null;
        } else {
            this.#endCursor = endCursor.prev;
            this.#endCursor.next = null;
        }
        this.#size --;
        return endCursor.value;
    }

    offer(value) {
        this.insert(value);
    }

    /** Adds an element at the beginning. */
    insert(value) {
        if (this.#cursor === null) {
            // empty list, we create one cursor for end and for start
            this.#endCursor =
                this.#createCursor(null, value, null);
            this.#cursor =
                this.#createCursor(null, value, null);
        } else if ( this.#size === 1 ) {
            this.#cursor = this.#createCursor(null, value, this.#endCursor);
            this.#endCursor.prev = this.#cursor;
        } else {
            let oldCursor = this.#cursor;
            this.#cursor = this.#createCursor(null, value, oldCursor);
            if(oldCursor!==null) oldCursor.prev = this.#cursor;
        }
        this.#size++;
        return this;
    }

    toString() {
        if ( this.#cursor === null) return "[]";
        let cur = this.#cursor;
        let s = "[";
        while (true) {
            s = s + '' + JSON.stringify(cur.value) + '';
            if (cur.next===null) break;
            s = s + ", ";
            cur = cur.next;
        }
        s = s + "]";
        return s;
    }


    #createCursor = (prev, value, next) => {
        if (prev===null) prev = null;
        if(next===null) next = null;
        return {prev: prev, next: next, value};
    }


}


let q = new Queue();
q.insert("truck 4").insert("truck 3").insert("truck 2").insert("truck 1");
console.log(`Let's start with four trucks inserted from 4 to 1 ${q}.`);
console.log("Inserting truck 0");
q.insert("truck 0");
console.log(`Queue is now ${q}.`)
console.log(`let's take one: ${q.retrieve()}`);
console.log(`let's take one: ${q.retrieve()}`);
console.log(`It's left with just a few ${q}`)