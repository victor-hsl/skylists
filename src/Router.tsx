import {Routes, Route} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Home from './pages/home'
export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}