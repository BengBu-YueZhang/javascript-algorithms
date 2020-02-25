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
}

// 中缀表达式
const expression = '( ( 10 * ( 6 / ( ( 9 + 3 ) * -11 ) ) ) + 17 ) + 5'

const transformRPN = (expression) => {
    const operator = ['+', '-', '*', '/']

    const operatorStack = new Stack()

    const operandStack = new Stack()

    const tokens = expression.split(' ')

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]
        if (operator.includes(token)) {
            operatorStack.push(token)
        } else {
            if (token === ')') {
                operandStack.push(operatorStack.pop())
            } else {
                if (
                    typeof Number(token) === 'number' &&
                    !isNaN(Number(token))
                ) {
                    operandStack.push(token)
                }
            }
        }
    }

    while (operatorStack.size()) {
        operandStack.push(operatorStack.pop())
    }
}

transformRPN(expression)
