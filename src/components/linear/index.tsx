import { useState } from 'react'
import solver from './solver'
import * as style from './index.style'

import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Linear = () => {
    const [getFormula, setFormula] = useState('')
    const input = (s: string) => {
        return s.replace(/[^xXㅌ0-9 \+\*\-\/\=\(\)]+/g, '').replace(/[Xㅌ]+/, 'x')
    }

    return (
        <>
            <h1>일차 방정식 계산기</h1>
            <style.inputBox 
                value={getFormula} 
                onChange={(e) => {setFormula(input(e.target.value))}}
            />
            <h2>x = {solver(getFormula)}</h2>
            {/* <style.chartContainer>
                <Line data={data} options={options}/>
            </style.chartContainer> */}
        </>
    )
}
export default Linear