import * as style from './index.style'
import solver from './solver'
import { useState } from 'react'

const Quadratic = () => {
    const [getFormula, setFormula] = useState('')
        return <>
        <h1>이차 방정식 계산기</h1>
        <style.inputBox value={getFormula} onChange={(e) => {setFormula(e.target.value)}}/>
        <h2>x = {solver(getFormula)}</h2>
    </>
}

export default Quadratic