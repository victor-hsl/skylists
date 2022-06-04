import styled from "styled-components";
import ThemeSwitcher from "../../components/themeSwitcher";
import { signOut, User, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../util/FirebaseConnection'
import { useState, useEffect } from "react";

const Head = styled.header`
    height: 5vh;
    padding: 0 30px;
    color: ${props => props.theme.text};
`;

const Session = styled.button`
    height: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    position: relative;
    border: 2px solid ${props => props.theme.activeBackground};
    border-radius: 30px;
    padding-left: 10px;
    padding-right: 10px;
    color: ${props => props.theme.text};

    i{
        margin-right: 2px;
    }
`;

type Props = {
    toggleTheme() : void;
}

const Header = ({toggleTheme} : Props) => {
    const [user, setUser] = useState<User>();
    const [show, setShow] = useState(false);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setShow(true);
            } else {
                setShow(false);
            }
        })
    }, []);
    const logout = async () => {
        await signOut(auth);
    } 

    return (
        <Head className="d-flex align-items-center pt-2">
            {auth.currentUser !== null &&
                <Session onClick={logout}>
                    <i className="bi bi-door-open"></i>
                    Sair
                </Session>
            }
            <ThemeSwitcher toggleTheme={toggleTheme}/>
        </Head>
    )
}

export default Header;