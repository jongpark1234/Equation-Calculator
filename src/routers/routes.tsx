import Main from "../components/main/index";
import Linear from '../components/linear/index'
import Quadratic from '../components/quadratic/index'
import Cubic from '../components/cubic/index'
import Simultaneous from '../components/simultaneous/index';

export const routes = [
    { path: '*', component: <Main/> },
    { path: '', component: <Main/> },
    { path: '/linear', component: <Linear/> },
    { path: '/quadratic', component: <Quadratic/> },
    { path: '/cubic', component: <Cubic/> },
    { path: '/simultaneous', component: <Simultaneous/> },
]