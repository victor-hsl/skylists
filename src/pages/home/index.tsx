import { auth } from "../../util/FirebaseConnection";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, User } from "firebase/auth";
import CardBlur from "../../components/cardBlur";
import {Container, Grid, GridItem} from './styles';
import { getListas } from "../../data/Lista";
import Nav from "../../template/nav";
import { Lista } from "../../types/Lista";
import Card  from "../../components/listCard/";
const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();
    const [listas, setListas] = useState<Lista[]>([]);
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user){
                setUser(user);
                setListas(await getListas(user.uid));
            } else {
                navigate('/login');
            }
        })
    }, []);

    return(
        <Container className="px-2">
            <CardBlur classe="container mt-2 p-4">
                    <Nav checked="h"/>
                <hr/>
                <Grid>
                    <GridItem>
                        <Card icon='I0' name='Lista Teste'></Card>
                    </GridItem>
                    <GridItem>
                        <Card icon='I1' name='Lista Teste'></Card>
                    </GridItem>
                    <GridItem>
                        <Card icon='I2' name='Lista Teste'></Card>
                    </GridItem>
                    <GridItem>
                        <Card icon='I3' name='Lista Teste'></Card>
                    </GridItem>
                    <GridItem>
                        <Card icon='I4' name='Lista Teste'></Card>
                    </GridItem>
                    <GridItem>
                        <Card icon='I5' name='Lista Teste'></Card>
                    </GridItem>
                    <GridItem>
                        <Card icon='I6' name='Lista Teste'></Card>
                    </GridItem>
                    <GridItem>
                        <Card icon='I7' name='Lista Teste'></Card>
                    </GridItem>
                    <GridItem>
                        <Card icon='I8' name='Lista Teste'></Card>
                    </GridItem>
                    <GridItem>
                        <Card icon='I9' name='Lista Teste'></Card>
                    </GridItem>                    
                </Grid>                
            </CardBlur>
        </Container>
    )
}

export default Home;