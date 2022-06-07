import {Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Add from './pages/add'
import Profile from './pages/profile'
import List from './pages/list'
export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/list/:owner/:list' element={<List/>} />
        </Routes>
    )
}