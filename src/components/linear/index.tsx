import * as style from './index.style'
import solver from './solver'
import { useState } from 'react'

const Linear = () => {
    const [getFormula, setFormula] = useState('')
    const input = (s: string) => {
        return s.replace(/[^x0-9 \+\*-\/\=\(\)]+/g, '')
    }
    return (
        <>
            <h1>일차 방정식 계산기</h1>
            <style.inputBox 
                value={getFormula} 
                onChange={(e) => {setFormula(input(e.target.value))}}
            />
            <h2>x = {solver(getFormula)}</h2>
        </>
    )
}

export default Linear