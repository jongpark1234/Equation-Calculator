import Calculator from "../../utils/calculator"

const eps = 5e-7

const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b)
}

const solver = (f: string): string => {
    const x = 10 ** 10
    if (!f.includes('=')) {
        return ''
    }
    const term = f.replace('x', () => {
        return '(10' + '*10'.repeat(9) + ')'
    }).split('=')
    const lt = Calculator(term[0])
    const rt = Calculator(term[1])
    if (lt === null || rt === null) {
        return 'Wrong Expression.'
    }
    const n1 = Number((Number(lt) / x)) - Number((Number(rt) / x))
    const n2 = (Number(rt) % x) - (Number(lt) % x)
    console.log(n1, n2)
    if (n1 === 0 && n2 !== 0) {
        return 'No solution.'
    } else if (n1 === 0 && n2 === 0) {
        return 'Infinitely many solutions.'
    } else {
        const GCD = gcd(Math.round(n1), Math.round(n2))
        const deno = Math.round(Number(n1 / GCD) + eps)
        const mole = Math.round(Number(n2 / GCD) + eps)
        return deno === 1 || deno === -1 ? `${mole * deno}` : `${mole} / ${deno}`
    }
}

export default solver