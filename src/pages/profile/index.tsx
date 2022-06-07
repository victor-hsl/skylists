import { auth } from "../../util/FirebaseConnection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, User } from "firebase/auth";
import CardBlur from "../../components/cardBlur";
import styled from "styled-components";
import Nav from "../../template/nav";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Container} from './styles'
const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            } else {
                navigate('/login');
            }
        })
    }, []);

    return(
        <Container className="px-2">
            <CardBlur classe="container mt-2 py-4 px-2 px-sm-3 px-md-4">
                <Nav checked="p" add />
                <hr/>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="aba">
                    <Tab eventKey="home" title="Home" className="abas">
                        teste
                    </Tab>
                    <Tab eventKey="profile" title="Profile" className="abas">
                        teste
                    </Tab>
                    <Tab eventKey="contact" title="Contact" className="abas">
                        teste
                    </Tab>
                </Tabs>
            </CardBlur>
        </Container>
    )
}

export default Profile;