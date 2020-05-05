

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

    /** Adds an element after the current and moves to this element. */
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

    /** Insert an element at the current position and stays there. */
    insert(value) {
        let wasEmpty = this.#cursor === null;
        if(!wasEmpty) this.gotoPrev();
        this.add(value);
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
        if ( this.#cursor === null || this.#cursor.next === null)
            throw new Error("No next");
        this.#cursor = this.#cursor.next;
    }
    gotoPrev() {
        if ( this.#cursor === null || this.#cursor.prev === null)
            throw new Error("No prev");
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
        if(n<0 || n>= this.#size) throw new Error("Out of bounds");
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

    toString() {
        if ( this.#cursor === null) return "[]";
        let lc = new ListCursor(this);
        let s = "[";
        lc.gotoStart();
        while (true) {
            if ( lc.#cursor === this.#cursor) s = s + "_";
            s = s + '' + JSON.stringify(lc.get()) + '';
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

// example manipulation of ListCursor
console.log("Let's create an empty listcursor");
var listCursor = new ListCursor();
console.log(listCursor);
console.log("Add a member to it.");
listCursor.add("james");
console.log(listCursor);
console.log("Add more members.");
listCursor.add('joe').add('jil').add({name:"jimmy"});
console.log(`The contents: ${listCursor}.`);
console.log("moving cursor to the left.")
listCursor.gotoPrev();
console.log(`The contents: ${listCursor}.`);
console.log(`Current element ${listCursor.get()}.`);
cp = {hisname: "june"};
listCursor.set(cp);
console.log(`Have set, current element: ${listCursor}.`);
console.log("Moving to position 1.");
listCursor.gotoPosition(1);
console.log(`Removing from ${listCursor}`);
listCursor.remove();
console.log(`Have removed, current element: ${listCursor}.`);



// a gospel example
console.log();
console.log("A gospel example")
let l = new ListCursor();
["G", "O", "O", "D","G","O","D", "L", "O", "R", "D"].forEach((t)=> {l.add(t);})
l.gotoPosition(2);
console.log(`A list:  ${l}`);
console.log("Removing.")
l.remove();
console.log(`List has become ${l}.`)
console.log("Inserting L");
l.insert("L")
console.log(`List has become ${l}.`)


