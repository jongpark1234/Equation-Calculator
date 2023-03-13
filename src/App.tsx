import { Router } from './routers/router'
import { BrowserRouter } from 'react-router-dom'

export default () => {
    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    )
}
