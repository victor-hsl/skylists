import {Container} from './styles'
import Nav from '../../template/nav';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { auth } from '../../util/FirebaseConnection';
import { onAuthStateChanged, User } from "firebase/auth";
import { useParams } from 'react-router';
import CardBlur from '../../components/cardBlur';
const List = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState<User>();
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
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
                    <Nav checked="a" add={false} />
                <hr/>
                <div>
                    Lista - {id}
                </div>              
            </CardBlur>
        </Container>
    )
}

export default List;