import {Routes, Route} from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Add from './pages/add'
import Share from './pages/share'
import List from './pages/list'
export default function mainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/share' element={<Share/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/list/:id' element={<List/>} />
        </Routes>
    )
}