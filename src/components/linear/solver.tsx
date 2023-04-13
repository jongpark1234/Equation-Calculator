const calculate = (f: string, x: number): number => {
    return eval(f.replaceAll('x', String(x))) as number
}
const solver = (f: string): string => {
    try {
        if (!f.includes('=')) {
            return 'Not Equation.'
        }
        const term = f.split('=')
        const equation = term[0] + '-' + '(' + term[1] + ')'
        const a = calculate(equation, 1)
        const b = calculate(equation, 2)
        if (a === 0 && b === 0) {
            return 'Infinitely Many Solutions.'
        } else if (a === b) {
            return 'No solution.'
        } else {
            const c = calculate(equation, 0)
            const diff = b - a
            return c !== 0 && diff !== 0 ? String( -1 * (c / diff)) : '0'
        }
    } catch (err) {
        return String(err)
    }
}

export default solver