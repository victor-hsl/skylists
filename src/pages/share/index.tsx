import { auth } from "../../util/FirebaseConnection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, User } from "firebase/auth";
import CardBlur from "../../components/cardBlur";
import styled from "styled-components";
import Nav from "../../template/nav";
const Container = styled.div`
    color: ${props => props.theme.text};
`;
const Share = () => {
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
            <CardBlur classe="container mt-2 p-4">
                    <Nav checked="s"/>
                <hr/>
                <div className="d-flex justify-content-center">
                    Share - {user?.email}
                </div>
            </CardBlur>
        </Container>
    )
}

export default Share;