import * as style from './index.style'

export const Sidebar = () => {
    const categoryList = [
        '일차 방정식 계산기',
        '이차 방정식 계산기',
        '삼차 방정식 계산기',
        '사차 방정식 계산기',
        '연립 방정식 계산기'
    ]
    return (
        <style.background>
            {
                categoryList.map((element, idx) => {
                    return (
                        <style.categoryContainer key={idx}>
                            {element}
                        </style.categoryContainer>
                    )
                })
            }
        </style.background>
    )
}
