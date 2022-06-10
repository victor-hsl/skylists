import {Container, Area, Back, ListName, IconCard, IconContainer} from './styles'
import Nav from '../../template/nav';
import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from "react-router";
import { useParams } from 'react-router';
import CardBlur from '../../components/cardBlur';
import IconRender from '../../components/iconRender';
import { Lista } from '../../types/Lista';
import { createCollection } from '../../util/FirebaseConnection';
import { doc, getDoc } from 'firebase/firestore';
import { auth } from '../../util/FirebaseConnection';
import AddItem from '../../components/addItem';
import { updateLista, deleteLista } from '../../data/Lista';
import RenderList from '../../components/renderList';
import Overlay from 'react-bootstrap/Overlay';
import { Alert } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
const List = () => {
    const navigate = useNavigate();
    const { border, backgroundColor, text, activeBackground, title } = useContext(ThemeContext);
    const { owner, list } = useParams();
    const [lista, setLista] = useState<Lista>();
    const [nome, setNome] = useState('');
    const [icon, setIcon] = useState(false);
    const [iconName, setIconName] = useState('');
    const [showIcon, setShowIcon] = useState(false);
    const [showCopy, setShowCopy] = useState(false);
    const [listLink, setListLink] = useState('');
    const [copyIcon, setCopyIcon] = useState('clipboard');
    const target = useRef(null);
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
                setIconName(docSnap.data().icone);
                if(docSnap.data().privacidade === 'block'){
                    if(auth.currentUser){
                        if(auth.currentUser.uid !== owner){
                            navigate('/home');    
                        }
                    } else {
                        navigate('/home');
                    }
                }
                else if (docSnap.data().privacidade === 'private'){
                    if(auth.currentUser){
                        console.log('Private list of: '+auth.currentUser.uid);
                    } else {
                        navigate('/home');
                    }
                }
            }
        }
        if(owner && list){
            getList(owner, list);
            setListLink('https://skylists.vercel.app/list/'+owner+'/'+list);
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
            update.icone = iconName;
            await updateLista(listId, userId, update);
        }
    }

    const back = async () => {
        const userId = owner;
        const listId = list;
        const update = lista;
        if(listId && userId && update){
            update.nome = nome;
            update.icone = iconName;
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
                                <div>
                                    <button className="iconButton" ref={target} onClick={(e) => setShowIcon(!showIcon)}>
                                        <IconRender icon={iconName}/>                           
                                    </button>       
                                    <Overlay target={target.current} show={showIcon} placement="bottom">
                                    {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                      <div
                                        {...props}
                                        style={{
                                          position: 'absolute',
                                          background: 'transparent',
                                          padding: '0px',
                                          color: 'white',
                                          borderRadius: 3,
                                          width: '400px',
                                          margin: '10px 0 0 0',
                                          ...props.style,
                                        }}
                                      >
                                        <IconContainer className="p-2 overflow-auto">
                                            <IconCard onClick={(e) => {setIconName('I0')}} active={iconName === 'I0' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I0"/>
                                            </IconCard>
                                            <IconCard onClick={() => {setIconName('I1')}} active={iconName === 'I1' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I1"/>
                                            </IconCard>
                                            <IconCard onClick={() => {setIconName('I2')}} active={iconName === 'I2' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I2"/>
                                            </IconCard>
                                            <IconCard onClick={() => {setIconName('I3')}} active={iconName === 'I3' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I3"/>
                                            </IconCard>
                                            <IconCard onClick={() => {setIconName('I4')}} active={iconName === 'I4' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I4"/>
                                            </IconCard>
                                            <IconCard onClick={() => {setIconName('I5')}} active={iconName === 'I5' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I5"/>
                                            </IconCard>
                                            <IconCard onClick={() => {setIconName('I6')}} active={iconName === 'I6' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I6"/>
                                            </IconCard>
                                            <IconCard onClick={() => {setIconName('I7')}} active={iconName === 'I7' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I7"/>
                                            </IconCard>
                                            <IconCard onClick={() => {setIconName('I8')}} active={iconName === 'I8' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I8"/>
                                            </IconCard>
                                            <IconCard onClick={() => {setIconName('I9')}} active={iconName === 'I9' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                                                <IconRender icon="I9"/>
                                            </IconCard>
                                        </IconContainer>
                                      </div>
                                    )}
                                  </Overlay>          
                                </div>
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
                                <button className='btn grupo' onClick={save}><i className="bi bi-save"></i></button>
                                <button className='btn grupo' onClick={setFinished}>
                                        <i className={`bi bi-${icon ? 'dash-square' : 'check2-square'}`}></i>
                                </button>
                                <button className='btn grupo' onClick={() => setShowCopy(true)}><i className="bi bi-share"></i></button>
                                <button className='btn grupo' onClick={excluir}><i className="bi bi-trash3"></i></button>
                            </div>
                        </div>                      
                    </div>
                    {showCopy &&
                        <Alert variant='primary' onClose={() => {setShowCopy(false);setCopyIcon('clipboard')}} dismissible className="mt-3">
                            <div className='d-flex align-items-center overflow-auto'>    
                                {lista?.privacidade === 'private' &&
                                    <i className='bi bi-lock copy me-2'/>
                                }
                                {lista?.privacidade === 'public' &&
                                    <i className='bi bi-unlock copy me-2'/>
                                }
                                {lista?.privacidade === 'block' &&
                                    <i className='bi bi-key copy me-2'/>
                                }
                                <Alert.Link href={listLink} className="listlink">{listLink}</Alert.Link><i onClick={() => {navigator.clipboard.writeText(listLink);setCopyIcon('clipboard-check')}} className={`bi bi-${copyIcon} copy ms-3`}></i>
                            </div>
                        </Alert>
                    }
                </Area>              
            </CardBlur>
        </Container>
    )
}

export default List;