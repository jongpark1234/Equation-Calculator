import { Route, Routes } from 'react-router-dom'
import { routes } from './routes'
import { Sidebar } from '../components/common/sidebar/index'
import * as style from './router.style'

export const Router = () => {
    return (
        <style.background>
            <Sidebar/>
            <style.main>
                <Routes>
                    {
                        routes.map((element, idx) => {
                            return (
                                <Route path={element.path} element={element.component} key={idx}/>
                                )
                            })
                        }
                </Routes>
            </style.main>
        </style.background>
    )
}