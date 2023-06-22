import * as style from './index.style'
import solver from './solver'
import { useState } from 'react'

const Simultaneous = () => {
    const [getSolution, setSolution] = useState<any>({
        x: 'Not Equation.',
        y: 'Not Equation.',
    })
        return <>
        <h1>연립 방정식 계산기</h1>
        <style.inputBox onChange={(e) => {
            setSolution(() => solver(e.target.value))
        }}/>
        <h2>x = {getSolution.x}</h2>
        <h2>y = {getSolution.y}</h2>
    </>
}

export default Simultaneous