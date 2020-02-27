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
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const numberStack = new Stack()
    const lettersStack = new Stack()
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const tokens = s.split('')

    let tempNumber = ''

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]
        if (numbers.includes(token)) {
            tempNumber += token
            
        } else {
            if (token === ']') {
                let temp = lettersStack.pop()
                let num = numberStack.pop()
                while (!temp.includes('[')) {
                    temp = `${lettersStack.pop()}${temp}`
                }
                temp = temp.split('[')[1]
                // 如果是0不需要重复任何字符串
                if (num === 0) {
                    continue
                }
                let temp2 = ''
                while (num > 0) {
                    temp2 += temp
                    num--
                }
                lettersStack.push(temp2)
            } else if (token === '[') {
                numberStack.push(Number(tempNumber))
                lettersStack.push(token) 
                tempNumber = ''
            } else {
                lettersStack.push(token) 
            }
        }
    }
    let temp = ''
    while (!lettersStack.isEmpty()) {
        temp = `${lettersStack.pop()}${temp}`
    }

    return temp
};
