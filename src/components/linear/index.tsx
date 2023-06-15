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
    // const data = {
    //     labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //     datasets: [{
    //         label: 'f(x) = y' as const,
    //         borderColor: 'rgb(75, 192, 192)' as const,
    //         backgroundColor: 'rgb(75, 192, 192)' as const,
    //         data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    //         borderWidth: 2,
    //     }]
    // }
    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {
    //             position: 'bottom' as const
    //         },
    //         title: {
    //             display: true,
    //             text: 'Graph'
    //         }
    //     },
    //     interaction: {
    //         mode: 'index' as const,
    //         intersect: false
    //     },
    //     animation: {
    //         duration: 0
    //     },
    //     scales: {
    //         y: {
    //             min: 0,
    //             max: 180
    //         }
    //     }
    // }

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