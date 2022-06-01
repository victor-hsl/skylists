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
    height: 4vh;
    width: 4vh;
    padding: auto;
    background: transparent;
    position: relative;
    border: 1px solid ${props => props.theme.text};
    border-radius: 50%;
    color: ${props => props.theme.text};

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
                    <i className="bi bi-door-open-fill"></i>
                </Session>
            }
            <ThemeSwitcher toggleTheme={toggleTheme}/>
        </Head>
    )
}

export default Header;