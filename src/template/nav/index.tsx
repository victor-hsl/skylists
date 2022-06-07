import React, { useState } from 'react';
import {Box, NavButton} from './styles';
import { useNavigate } from 'react-router';
type Props = {
    checked: string,
    add: boolean
}

const Nav = ({checked, add} : Props) => {
    const navigate = useNavigate();

    const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === 'home'){
            navigate('/home');
        }
        if(e.target.value === 'add'){
            navigate('/add');
        }
        if(e.target.value === 'profile'){
            navigate('/profile');
        }
    }
    return(
        <Box className="">
            <NavButton htmlFor="home">
                <input type="radio" id="home" name="group" value="home" className="nav-inpt" defaultChecked={checked === 'h'} onChange={radioHandler}/>
                <span className="nav-botao">
                    <span className="nav-icone bi bi-house-door"/>
                    <span className="nav-texto">
                        Home
                    </span>
                </span>
            </NavButton>
            <NavButton htmlFor="add">
                <input type="radio" id="add" name="group" value="add" className="nav-inpt" defaultChecked={checked === 'a'} onChange={radioHandler}/>
                <span className="nav-botao">
                    <span className={`nav-icone bi ${add?'bi-clipboard-plus':'bi-clipboard-check'}`}/>
                    <span className="nav-texto">
                        {
                            add ? 
                                <div>Add List</div> 
                            : 
                                <div>Your List</div>
                        }
                    </span>
                </span>
            </NavButton>
            <NavButton htmlFor="profile">
                <input type="radio" id="profile" name="group" value="profile" className="nav-inpt" defaultChecked={checked === 'p'} onChange={radioHandler}/>
                <span className="nav-botao">
                    <span className="nav-icone bi bi-person"/>
                    <span className="nav-texto">
                        Profile
                    </span>
                </span>
            </NavButton>
        </Box>
    )
}

export default Nav;
