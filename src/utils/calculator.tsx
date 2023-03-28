const arithmetic = (expression: string) => {
    let error = false
    // 곱셈, 나눗셈 처리
    while (expression.includes('*') || expression.includes('/')) {
        expression = expression.replace(/(\[-)?\d+]?(\*|\/)(\[-)?\d+]?/, (x) => {
            if (x.includes('*')) {
                const calcResult = Number(x.split('*')[0].replace(/[[\]]/g, '')) * Number(x.split('*')[1].replace(/[[\]]/g, ''))
                return calcResult >= 0 ? calcResult.toString() : '[' + calcResult.toString() + ']'
            }
            else {
                const dividend = Number(x.split('/')[0].replace(/[[\]]/g, ''))
                const divisor = Number(x.split('/')[1].replace(/[[\]]/g, ''))

                // @ts-ignore
                if (divisor === 0n) { // Divison By Zero일 경우 - ROCK 반환
                    error = true
                    return 'ROCK'
                }
                const calcResult = dividend / divisor
                return calcResult >= 0 ? calcResult.toString() : '[' + calcResult.toString() + ']'
            }
        })
    }
    while (expression.includes('+') || (expression.replace(/\[.*\]/g, '').includes('-'))) { // 덧셈, 뺄셈 처리. 역시 계산 중 음수가 발생하면 []로 감싸서 임시 처리
        expression = expression.replace(/(\[-)?\d+]?(\+|\-)(\[-)?\d+]?/, (x) => {
            if (x.includes('+')) {
                const calcResult = Number(x.split('+')[0].replace(/[[\]]/g, '')) + Number(x.split('+')[1].replace(/[[\]]/g, ''))
                return calcResult >= 0 ? calcResult.toString() : '[' + calcResult.toString() + ']'
            }
            else {
                x = x.replace(/(?<=\[)-/g, 'N')
                const calcResult = Number(x.split('-')[0].replace('N', '-').replace(/[[\]]/g, '')) - Number(x.split('-')[1].replace('N', '-').replace(/[[\]]/g, ''))
                return calcResult >= 0 ? calcResult.toString() : '[' + calcResult.toString() + ']'
            }
        })
    }
    expression = expression.replace(/^0+/, '') // Leading Zeroes 제거
    if (error) {
        return null
    }
    return expression === '' ? '0' : expression
}

const Calculator = (input: string): string | null => {
    let error = false
    if (input === '' || input === '()') { // 예외 처리
        return null
    }
    if (/[+\-*/]{2,}|\([+\-*/]|[+\-*/]\)|^[+\-*/]|[+\-*/]$|\d+\(|\)\d+/.test(input)) { // 연산자, 숫자 유효성 체크
        return null
    }
    const stack = []
    const brackets = input.match(/[()]/g) || []
    for (let i = 0; i < brackets.length; i++) { // 괄호 유효성 체크
        if (brackets[i] === '(') {
            stack.push('(')
        } else if (stack.length === 0) {
            return null
        } else {
            stack.pop()
        }
    }
    if (stack.length !== 0) {
        return null
    }
    while (input.includes('(')) { // 괄호가 사라질 때 까지 계속 괄호 연산
        input = input.replace(/\([^()]*?\)/, (x) => {
            const temp = arithmetic(x.slice(1, x.length - 1))
            if (temp === null) {
                error = true
                return 'ROCK'
            } else {
                return temp
            }
        })
    }
    const temp = arithmetic(input)
    if (temp === null || error) {
        return null
    } else {
        return temp.replace(/[[\]]/g, '') // 모든 계산이 끝났으므로 괄호 제거 후 결과 반환
    }
}

export default Calculator