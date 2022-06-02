import React, { useState } from 'react';
import {Box, NavButton} from './styles';
import { useNavigate } from 'react-router';
type Props = {
    checked: string
}

const Nav = ({checked} : Props) => {
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();

    const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === 'home'){
            navigate('/home');
        }
        if(e.target.value === 'add'){
            navigate('/add');
        }
        if(e.target.value === 'share'){
            navigate('/share');
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
                    <span className="nav-icone bi bi-clipboard-check"/>
                    <span className="nav-texto">
                        Add List
                    </span>
                </span>
            </NavButton>
            <NavButton htmlFor="share">
                <input type="radio" id="share" name="group" value="share" className="nav-inpt" defaultChecked={checked === 's'} onChange={radioHandler}/>
                <span className="nav-botao">
                    <span className="nav-icone bi bi-share"/>
                    <span className="nav-texto">
                        Share
                    </span>
                </span>
            </NavButton>
            {selected}
        </Box>
    )
}

export default Nav;
