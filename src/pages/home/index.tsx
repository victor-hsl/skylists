import { auth } from "../../util/FirebaseConnection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, User } from "firebase/auth";
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
        <div>
            Home - {user?.uid}
        </div>
    )
}

export default Home;