import {Container, Area, Back, ListName,} from './styles'
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
import { updateLista, deleteLista } from '../../data/Lista';
import RenderList from '../../components/renderList';
const List = () => {
    const navigate = useNavigate();
    const { owner, list } = useParams();
    const [lista, setLista] = useState<Lista>();
    const [nome, setNome] = useState('');
    const [icon, setIcon] = useState(false);
    useEffect(() => {
        const getList = async (owner: string, list: string) => {
            const collection = createCollection(owner);
            const docRef = doc(collection, list);
            const docSnap = await getDoc(docRef);
            if(docSnap.exists()){
                await setAll({
                    done: docSnap.data().done,
                    id: docSnap.id,
                    icone: docSnap.data().icone,
                    items: docSnap.data().items,
                    nome: docSnap.data().nome,
                    privacidade: docSnap.data().privacidade
                });
                setNome(docSnap.data().nome);  
                setIcon(docSnap.data().done);  
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

    const save = async () => {
        const userId = owner;
        const listId = list;
        const update = lista;
        if(listId && userId && update){
            update.nome = nome;
            await updateLista(listId, userId, update);
        }
    }

    const back = async () => {
        const userId = owner;
        const listId = list;
        const update = lista;
        if(listId && userId && update){
            update.nome = nome;
            await updateLista(listId, userId, update);
            navigate('/home');
        }
    }

    const setFinished = async () => {
        if(lista){
            if(lista.done === false){
                lista.done = true;
                setIcon(true);
                lista.items.map((item, key) => {
                    item.status = true;
                })
                const newList = lista;
                await setAll(undefined);
                await setAll(newList);
            } else {
                lista.done = false;
                setIcon(false);
                lista.items.map((item, key) => {
                    item.status = false;
                })
                const newList = lista;
                await setAll(undefined);
                await setAll(newList);
            }
        }
    }

    const deleteItem = async (key: number) => {
        if(lista){
            lista.items.splice(key, 1);
            const newList = lista;
            await setAll(undefined);
            await setAll(newList);
        }
    }

    const excluir = async () => {
        if(owner && list){
            await deleteLista(owner, list);
            navigate('/home');
        }
    }
    return(
        <Container className="px-2">
            <CardBlur classe="container mt-2 py-4 px-2 px-sm-3 px-md-4">
                <Nav checked="a" add={false} />
                <hr/>
                <Area className="p-3">
                    <div className="d-flex ">
                        <Back className="p-2 me-2" onClick={back}>
                            <i className="bi bi-clipboard-x me-1"></i>
                                Voltar
                        </Back>
                        <div className="d-flex display-6 text-end ms-auto my-auto align-items-center justify-content-end">
                            <ListName
                                className="display-6 me-2"
                                value={nome}
                                onChange={(e) => {setNome(e.target.value)}}
                            />
                            {lista &&
                                <IconRender icon={lista.icone}/>                           
                            }
                        </div>
                    </div>
                    <hr/>
                    <div className="">
                        {lista &&
                            <RenderList lista={lista} handleDone={handleDone} handleDeleteItem={deleteItem}/>
                        }
                        <AddItem onEnter={handleAddTask}/>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <div className="">
                            <div className="input-group">
                                <button className='btn grupo' onClick={save}><i className="bi bi-save me-1"></i>Salvar</button>
                                <button className='btn grupo' onClick={setFinished}>
                                    {icon === false &&
                                        <label><i className="bi bi-dash-square me-1"></i>Marcar Tudo</label>
                                    }
                                    {icon === true &&
                                        <label><i className="bi bi-check2-square me-1"></i>Desmarcar Tudo</label>
                                    }                                    
                                </button>
                                <button className='btn grupo' onClick={excluir}><i className="bi bi-trash3 me-1"></i>Excluir</button>
                            </div>     
                        </div>                      
                    </div>
                </Area>              
            </CardBlur>
        </Container>
    )
}

export default List;