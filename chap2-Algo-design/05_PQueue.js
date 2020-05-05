
class PQueue {
    #startCursor = null;
    #endCursor = null;
    #size = 0;

    constructor (earlier) {
        if(earlier) {
            if(! earlier instanceof PQueue)  throw new Error("Only previous queues in constructor.");
            this.#startCursor = earlier.#startCursor
            this.#endCursor = earlier.#endCursor;
            this.#size = earlier.#size;
        }
    }

    retrieve() {
        let endCursor = this.#endCursor;
        if( this.#size === 1) {
            this.#endCursor = this.#startCursor = null;
        } else {
            this.#endCursor = endCursor.prev;
            this.#endCursor.next = null;
        }
        this.#size --;
        return endCursor.value;
    }

    offer(value, priority) {
        return this.insert(value, priority);
    }

    insert(value, prio) {
        if (this.#startCursor === null) {
            // empty list, we create one cursor for end and for start
            this.#endCursor =
                this.#createCursor(null, value, prio, null);
            this.#startCursor =
                this.#createCursor(null, value, prio, null);
        } else if ( this.#size === 1) {
            if ( this.#startCursor.prio < prio ) {
                this.#endCursor = this.#createCursor(this.#startCursor, value, prio, null);
                this.#startCursor.next = this.#endCursor;
            } else {
                this.#startCursor = this.#createCursor(null, value, prio, this.#endCursor);
                this.#endCursor.prev = this.#startCursor;
            }
            // TODO: this is not clean yet.
        } else {
            // find the proper position: we want to insert right before
            // an element with the priority greater or equal to prio
            let c = this.#startCursor;
            while ( c.prio < prio && c.next)
                c = c.next;

            if( c === this.#startCursor && c.prio >= prio) { // at start
                this.#startCursor =
                    this.#createCursor(null, value, prio, c);
            } else if (c.next) { // not at end, insert there and push right
                c.prev = this.#createCursor(c.prev, value, prio, c);
                c.prev.next = c;
            } else { // at end
                if( c.prio < prio ) {
                    this.#endCursor = this.#createCursor(c, value, prio, null);
                    c.next = this.#endCursor;
                }  else {
                    c.prev = this.#createCursor(c.prev, value, prio, c);
                    this.#endCursor.prev.next = c.prev;
                }
            }
        }
        this.#size++;
        return this;
    }

    toString() {
        if ( this.#startCursor === null) return "[]";
        let cur = this.#startCursor;
        let s = "[";
        while (true) {
            s = s + cur.prio + ":" + JSON.stringify(cur.value) + '';
            if (cur.next===null) break;
            s = s + ", ";
            cur = cur.next;
        }
        s = s + "]";
        return s;
    }


    #createCursor = (prev, value, prio, next) => {
        if (prev===null) prev = null;
        if (next===null) next = null;
        return {prev: prev, next: next, prio: prio, value};
    }

}

var pq = new PQueue();
console.log("Let's make a family");
pq.offer("son1", 7).offer("daughter", 8).offer("son2", 9)
    .offer("granddad", 65).offer("grandmom", 61)
    .offer("dad", 30).offer("mom", 35);
console.log(`The family in priority order: ${pq}`);

console.log(`Let's start with picking the highest priority ${pq.retrieve()}`)
console.log(`Family now is ${pq}.`)