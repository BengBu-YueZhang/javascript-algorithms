class Stack {
    constructor () {
        this.stack = []
    }

    push (v) {
        this.stack.push(v)
    }

    pop () {
        return this.stack.pop()
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
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operator = ['+', '-', '*', '/']

    const stack = new Stack()

    for (let i = 0; i < tokens.length; i++) {
        if (operator.includes(tokens[i])) {
            const a = Number(stack.pop())
            const b = Number(stack.pop())
            let result = null
            switch (tokens[i]) {
                case '+':
                    result = a + b 
                    break
                case '-':
                    result = b - a
                    break
                case '*':
                    result = a * b
                    break
                case '/':
                    if (
                        !(a + '').includes('.') &&
                        !(b + '').includes('.')
                    ) {
                        // 整数除法只保留整数部分
                        result = Number((b / a + '').split('.')[0])
                    } else {
                        result = b / a
                    }
                    break
            }
            stack.push(result)
        } else {
            stack.push(tokens[i])
        }
    }

    return stack.top()
};