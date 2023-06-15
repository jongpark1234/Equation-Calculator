import { Equation, Expression, parse } from 'algebra.js'
import { simplify } from 'mathjs'
const solver = (f: string): string | undefined => {
    try {
        if (!f.includes('=')) {
            return 'Not Equation.'
        }
        const [lhs, rhs] = f.split('=').map(term => {
            return parse(simplify(term).toString()) as Expression
        })
        if ([lhs.toString(), rhs.toString()].includes('undefined')) {
            return 'Wrong Expression.'
        }
        if (lhs === rhs) {
            return 'Infinitely Many Solutions.'
        }
        return new Equation(lhs, rhs).solveFor('x')?.toString()
    } catch (err) {
        return String(err)
    }
}

export default solver