import { Equation, Expression, parse } from 'algebra.js'
import { simplify } from 'mathjs'
const solver = (f: string): string | { x: any, y: any } => {
    try {
        if (!f.includes('=')) {
            return 'Not Equation.'
        }
        const [lhs, rhs] = f.split('=').map(term => {
            return parse(simplify(term).toString()) as Expression
        })
        const equation = new Equation(lhs, rhs)
        return {
            x: equation.solveFor('x')?.toString(),
            y: equation.solveFor('y')?.toString()
        }
    } catch (err) {
        return String(err)
    }
}

export default solver