import {Routes, Route} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/admin' element={<Login/>}/>
        </Routes>
    )
}