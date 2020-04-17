

class ListCursor {
    #cursor = null;
    #size = 0;

    constructor (earlier) {
        if(earlier) {
            if(! earlier instanceof ListCursor)  throw new Error("Only previous ListCursors.");
            this.#cursor = earlier.#cursor;
            this.#size = earlier.#size;
        }
    }

    getValueOfCursor() {
        return this.#cursor.value;
    }

    setValueOfCursor(nc) {
        this.#cursor.value = nc;
    }

    get() {
        if(this.#cursor) {
            return this.#cursor.value;
        } else return undefined;

    }

    add(value) {
        if (this.#cursor === null) {
            // empty list
            this.#cursor = this.#createCursor(null, value, null);
            this.#size++;
        } else {
            let oldCursor = this.#cursor, nextCursor = this.#cursor.next;
            this.#cursor = this.#createCursor(oldCursor, value, nextCursor);
            if(nextCursor!==null) nextCursor.prev = this.#cursor;
            oldCursor.next = this.#cursor;
            this.#size++;
        }
        return this;
    }

    remove(value) {
        if(typeof(value)==="undefined") {return remove();}
        let lc = new ListCursor(this);
        lc.seek(value);
        lc.remove();
        return this;
    }

    remove() {
        let c = this.#cursor;
        if(c===null) return;
        if(c.prev)  c.prev.next = c.next;
        if(c.next) {
            c.next.prev = c.prev;
            this.#cursor = c.next;
        } else this.#cursor = c.prev;
        this.#size--;
        return this;
    }

    set(value) {
        if(this.#cursor)
            this.#cursor.value = value;
        else
            this.#cursor = this.#createCursor(null, value, null);
        return this;
    }

    seekRight(value) {
        let startCursor = this.#cursor;
        while (this.#cursor.value !== value && this.#cursor.next)
            gotoNext();
        if (this.#cursor.value === value)
            return value;
        else
            this.#cursor = startCursor;
    }


    gotoNext() {
        if ( this.#cursor === null)  throw new Error("No next");
        this.#cursor = this.#cursor.next;
    }
    gotoPrev() {
        if ( this.#cursor == null)  throw new Error("No next");
        this.#cursor = this.#cursor.prev;
    }

    gotoStart() {
        if ( this.#cursor) {
            while (this.#cursor.prev) this.#cursor = this.#cursor.prev;
        }
        return this;
    }

    gotoEnd() {
        if ( this.#cursor !== null) {
            while (this.#cursor.next) this.#cursor = this.#cursor.next;
        }
        return this;
    }

    hasNext() {
        return this.#cursor !== null && this.#cursor.next!==null;
    }

    gotoPosition(n) {
        if(n<0 || n>= size) throw new Error("Out of bounds");
        this.gotoStart();
        for ( let i = 0; i< n; i++) this.gotoNext();
        return this;
    }


    getElementInPosition(p) {
        if(this.#cursor===null)
            return undefined;
        let localCursor = new ListCursor(this);
        localCursor.gotoPosition(p);
        return localCursor.get();
    }

    displayMe() {
        if ( this.#cursor === null) return "[]";
        let lc = new ListCursor(this);
        let s = "[";
        lc.gotoStart();
        while (true) {
            if ( lc.#cursor === this.#cursor) s = s + "_";
            s = s + '"' + lc.get() + '"';
            if ( lc.#cursor === this.#cursor) s = s + "_";
            if (lc.hasNext()) s = s + ", ";
            if (!lc.hasNext()) break;
            lc.gotoNext();
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

console.log("Let's create an empty listcursor");
var listCursor = new ListCursor();
console.log(listCursor.displayMe());
console.log("Add a number to ");
listCursor.add(5);
console.log(listCursor.displayMe());
console.log("Add more things.");
listCursor.add(7).add('hello').add(NaN);
console.log(`The contents: ${listCursor.displayMe()}.`);
listCursor.gotoPrev();
console.log(`Current element ${listCursor.get()}.`);
cp = 77;
listCursor.set(cp);
console.log(`Have set, current element: ${listCursor.displayMe()}.`);
listCursor.remove();
console.log(`Have removed, current element: ${listCursor.displayMe()}.`);
console.log(listCursor.displayMe());





