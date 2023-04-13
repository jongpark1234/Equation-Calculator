const solver = (f: string): string => {
    try {
        if (!f.includes('=')) {
            return 'Not Equation.'
        }
        const term = f.split('=')
        const equation = term[0] + '-' + '(' + term[1] + ')'
        const a = eval(equation.replaceAll('x', '1')) as number
        const b = eval(equation.replaceAll('x', '2')) as number
        if (a === 0 && b === 0) {
            return 'Infinitely Many Solutions.'
        } else if (a === b) {
            return 'No solution.'
        } else {
            const c = eval(equation.replaceAll('x', '0')) as number
            const diff = b - a
            return c !== 0 && diff !== 0 ? String(-1 * (c / diff)) : '0'
        }
    } catch (err) {
        return String(err)
    }
}

export default solver