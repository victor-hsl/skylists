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
const Add = () => {
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
                    <Nav checked="a" add/>
                <hr/>
                <div className="d-flex justify-content-center">
                    Add - 
                    {user?.email}
                </div>
            </CardBlur>
        </Container>
    )
}

export default Add;