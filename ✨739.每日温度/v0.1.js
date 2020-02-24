class Stack {
    constructor () {
        this.stack = []
    }

    push (v) {
        this.stack.push(v)
    }

    pop () {
        this.stack.pop()
    }

    top () {
        return this.stack[this.stack.length - 1]
    }

    size () {
        return this.stack.length
    }

    isEmpty () {
        return this.stack.length === 0
    }
}

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const stack = new Stack()
    const result = []
    
    for (let i = T.length - 1; i >= 0; i--) {
        const temperature = T[i]
        const index = i

        while (
            !stack.isEmpty() &&
            temperature >= T[stack.top()]
        ) {
            stack.pop()
        }

        result[index] = stack.isEmpty() ? 0 : stack.top() - index
        stack.push(index)
    }
    return result
};