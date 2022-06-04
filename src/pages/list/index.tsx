import {Container, Area, Back, ListName} from './styles'
import Nav from '../../template/nav';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import { useParams } from 'react-router';
import CardBlur from '../../components/cardBlur';
import IconRender from '../../components/iconRender';
import { Lista } from '../../types/Lista';
import { createCollection } from '../../util/FirebaseConnection';
import { doc, getDoc } from 'firebase/firestore';
import AddItem from '../../components/addItem';
import RenderList from '../../components/renderList';
const List = () => {
    const navigate = useNavigate();
    const { owner, list } = useParams();
    const [lista, setLista] = useState<Lista>();
    const [nome, setNome] = useState('');
    useEffect(() => {
        const getList = async (owner: string, list: string) => {
            const collection = createCollection(owner);
            const docRef = doc(collection, list);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                setLista({
                    done: docSnap.data().done,
                    id: docSnap.id,
                    icone: docSnap.data().icone,
                    items: docSnap.data().items,
                    nome: docSnap.data().nome
                });
                setNome(docSnap.data().nome);      
            }
        }
        if(owner && list){
            getList(owner, list);
        }
    }, []);

    

    const handleDone = (done : boolean, i : number) => {
        if(lista){
            lista.items[i].status = done;
        }
    }

    const handleAddTask = async (taskName : string) => {
        if(lista){
            let newList : Lista;
            newList = lista;
            await setAll(undefined);
            newList.items.push({
                description: taskName,
                status: false
            })
            await setAll(newList);
        }
    }

    const setAll = async (lst: Lista | undefined) => {
        setLista(lst);
    }

    const alertList = () => {
        console.log(lista);
    }
    const back = () => {
        navigate('/home');
    }
    return(
        <Container className="px-2">
            <CardBlur classe="container mt-2 p-4">
                <Nav checked="a" add={false} />
                <hr/>
                <Area className="p-3">
                    <div className="d-flex ">
                        <Back className="p-2 me-1" onClick={back}>
                            <i className="bi bi-clipboard-x me-1"></i>
                                Voltar
                        </Back>
                        <div className="d-flex display-6 text-end mx-lg-auto ms-auto my-auto align-items-center">
                            {nome}
                            {lista &&
                                <IconRender icon={lista?.icone}/>                           
                            }
                        </div>
                    </div>
                    <hr/>
                    <div className="">
                        {lista &&
                            <RenderList lista={lista} handleDone={handleDone}/>
                        }
                        <AddItem onEnter={handleAddTask}/>
                    </div>
                    <hr/>
                    <div className="d-flex">
                        <button className='btn btn-success' onClick={alertList}>Print</button>
                    </div>
                </Area>              
            </CardBlur>
        </Container>
    )
}

export default List;