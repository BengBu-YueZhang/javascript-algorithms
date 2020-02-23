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
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = new Stack()

    const arr = s.split('')

    for (let i = 0; i < arr.length; i++) {
        const parentheses = arr[i]
        if (!stack.size()) {
            stack.push(parentheses)
        } else {
            const top = stack.top()
            if (
                top === '[' && parentheses === ']' ||
                top === '(' && parentheses === ')' ||
                top === '{' && parentheses === '}'
            ) {
                stack.pop()
            } else {
                stack.push(parentheses)
            }
        }
    }
    if (stack.size()) {
        return false
    } else {
        return true
    }
};