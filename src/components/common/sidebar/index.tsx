import * as style from './index.style'

export const Sidebar = () => {
    const categoryList = [
        { title: '일차 방정식 계산기', path: '/linear' },
        { title: '이차 방정식 계산기', path: '/quadratic' },
        { title: '삼차 방정식 계산기', path: '/cubic' },
        { title: '사차 방정식 계산기', path: '/quartic' },
        { title: '연립 방정식 계산기', path: '/simultaneous' }
    ]
    return (
        <style.background>
            {
                categoryList.map((element, idx) => {
                    return (
                        <style.categoryContainer to={element.path} key={idx}>
                            <style.categoryTitle>{element.title}</style.categoryTitle>
                        </style.categoryContainer>
                    )
                })
            }
        </style.background>
    )
}
