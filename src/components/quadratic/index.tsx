import * as style from './index.style'
import nerdamer from 'nerdamer'
import { useState } from 'react'

const Quadratic = () => {
    const [getFormula, setFormula] = useState('')
    const calculation = (f: string): string => {
        try {
            return nerdamer(f, {['x']: '4'}).text()
        } catch (e) {
            return ''
        }
    }
        return <>
        <h1>이차 방정식 계산기</h1>
        <style.inputBox value={getFormula} onChange={(e) => {setFormula(e.target.value)}}/>
        <h2>{calculation(getFormula)}</h2>
    </>
}

export default Quadratic