class Stack {
    push ( obj ) {
        this.#topNode = this.#createStackNode ( obj, this.#topNode);
    }

    peek ( ) {
        return this.#topNode.element;
    }

    pop ( ) {
        let t = this.#topNode;
        this.#topNode = t.previousNode;
        return t.element;
    }

    render ( ) {
        let t = this.#topNode, r = "";
        while ( typeof(t) !== "undefined" ) {
            r = r + (r.length>0 ? ", " : "") + t.element;
            t = t.previousNode;
        }
        return r;
    }

    empty ( ) {
        return typeof(this.#topNode) === "undefined"
    }

    #createStackNode = function ( element, previous ) {
        return {
            element: element,
            previousNode: previous
        };
    }

    #topNode = undefined;
}

// create stack
let s = new Stack();

// add a few elements
s.push('A');
s.push('B');
s.push('C');

// what's on top?
console.log( `Found on top of s: ${s.peek()}.` );

// print stack
console.log(`Stack is rendered to (${s.render()}).`)

// pile them into next stack
console.log("Let's unpile and stack.")
let t = new Stack();
do {
    t.push ( s.pop() );
    console.log ( `Stack s: (${s.render()}) and t: (${t.render()}).`)
} while ( ! s.empty())
console.log("If you unpile and stack... you revert.")