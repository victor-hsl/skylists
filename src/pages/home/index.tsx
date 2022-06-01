import { auth } from "../../util/FirebaseConnection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, User } from "firebase/auth";
import CardBlur from "../../components/cardBlur";
import {Container} from './styles';
const Home = () => {
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
        <Container>
            <CardBlur classe="container mt-2 p-4">
                <div className="d-flex justify-content-center">
                    <h4 className="display-6">Suas listas</h4>
                </div>
                <hr/>
                <div className="d-flex justify-content-end">
                    {user?.email}
                    <button className="btn btn-success">
                    </button>
                </div>
            </CardBlur>
        </Container>
    )
}

export default Home;