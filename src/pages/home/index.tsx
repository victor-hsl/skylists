import { auth } from "../../util/FirebaseConnection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, User } from "firebase/auth";
import CardBlur from "../../components/cardBlur";
import {Container, Grid, GridItem } from './styles';
import { getListas } from "../../data/Lista";
import Nav from "../../template/nav";
import { Lista } from "../../types/Lista";
import Card  from "../../components/listCard/";
const Home = () => {
    const navigate = useNavigate();
    const [id, setId] = useState(''); 
    const [user, setUser] = useState<User>();
    const [listas, setListas] = useState<Lista[]>([]);
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user){
                setUser(user);
                setId(user.uid);
                setListas(await getListas(user.uid));
            } else {
                navigate('/login');
            }
        })

    }, []);

    const completed = () => {
        let total: number;
        total = 0;
        listas.map((item, index) => {
            if(item.done){
                total++;
            }
        })
        return total.toString();
    }

    return(
        <Container className="px-2">
            <CardBlur classe="container mt-2 py-4 px-2 px-sm-3 px-md-4">
                <Nav checked="h" add />
                <hr/>
                <Grid>
                    {
                        listas.map((item, key) => (
                            <GridItem key={key}>
                                <Card icon={item.icone} name={item.nome} idList={item.id} idUser={id}/>
                            </GridItem>
                        ))
                    }
                </Grid>  
            </CardBlur>
        </Container>
    )
}

export default Home;