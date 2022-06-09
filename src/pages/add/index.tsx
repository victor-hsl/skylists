import { auth } from "../../util/FirebaseConnection";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { onAuthStateChanged, User } from "firebase/auth";
import CardBlur from "../../components/cardBlur";
import Nav from "../../template/nav";
import {Container, IconContainer, IconCard, Wrapper} from './styles'
import IconRender from "../../components/iconRender";
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Lista } from "../../types/Lista";
import { addLista } from "../../data/Lista";
import { ThemeContext } from 'styled-components';
const Add = () => {
    const { border, backgroundColor, text, activeBackground, title } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();
    const [newList, setNewList] = useState<Lista>();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
                initializeList();
            } else {
                navigate('/login');
            }
        })
    }, []);

    const initializeList = async () => {
        await setNewList({
            done: false,
            id: '',
            icone: '',
            items: [{
                description: 'Item',
                status: false
            }],
            nome: '',
            privacidade: 'public'
        });
    }
    const setIcon = async (icon: string) => {
        if(newList){
            const ref = newList;
            ref.icone = icon;
            await initializeList();
            setNewList(ref);
        }
    }

    const setNome = async (nome: string) => {
        if(newList){
            const ref = newList;
            ref.nome = nome;
            await initializeList();
            setNewList(ref);
        }
    }

    const setPrivacidade = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if(newList){
            const ref = newList;
            ref.privacidade = e.target.value;
            await initializeList();
            setNewList(ref);
        }
    }
    
    const addList = async () => {
        if(user && newList){
            await addLista(user.uid, newList);
            navigate('/home');
        }
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Regras de Privacidade</Popover.Header>
          <Popover.Body>
            <p><strong>Publica: </strong> Todos, cadastrados no sistema ou não, podem ver e editar sua lista.</p>
            <p><strong>Privada: </strong> Apenas usuários cadastrados no sistema poderão ver e editar.</p>
            <p><strong>Bloqueada: </strong> Somente você poderá ver e editar a lista.</p>
          </Popover.Body>
        </Popover>
      );

    return(
        <Container className="px-2">
            <CardBlur classe="container mt-2 py-4 px-2 px-sm-3 px-md-4">
                    <Nav checked="a" add/>
                <hr/>
                <div className="d-flex justify-content-center display-6 mb-2">
                    Nova Lista
                </div>
                <div className="mb-2 me-auto">
                    Escolha o icone:
                </div>
                <IconContainer className="p-2 overflow-auto">
                    <IconCard onClick={(e) => {setIcon('I0')}} active={newList?.icone === 'I0' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I0"/>
                    </IconCard>
                    <IconCard onClick={() => {setIcon('I1')}} active={newList?.icone === 'I1' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I1"/>
                    </IconCard>
                    <IconCard onClick={() => {setIcon('I2')}} active={newList?.icone === 'I2' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I2"/>
                    </IconCard>
                    <IconCard onClick={() => {setIcon('I3')}} active={newList?.icone === 'I3' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I3"/>
                    </IconCard>
                    <IconCard onClick={() => {setIcon('I4')}} active={newList?.icone === 'I4' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I4"/>
                    </IconCard>
                    <IconCard onClick={() => {setIcon('I5')}} active={newList?.icone === 'I5' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I5"/>
                    </IconCard>
                    <IconCard onClick={() => {setIcon('I6')}} active={newList?.icone === 'I6' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I6"/>
                    </IconCard>
                    <IconCard onClick={() => {setIcon('I7')}} active={newList?.icone === 'I7' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I7"/>
                    </IconCard>
                    <IconCard onClick={() => {setIcon('I8')}} active={newList?.icone === 'I8' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I8"/>
                    </IconCard>
                    <IconCard onClick={() => {setIcon('I9')}} active={newList?.icone === 'I9' ? true : false} border={border} backgroundColor={backgroundColor} text={text} activeBackground={activeBackground}>
                        <IconRender icon="I9"/>
                    </IconCard>
                </IconContainer>
                <div className="mt-4">
                    <label htmlFor="nome">
                        Nome da lista:
                    </label>
                    <Wrapper>
                        <input
                            className="col-12" 
                            id="nome"
                            type="text"
                            value={newList?.nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <div className="underline"/>
                        <span className="icon">
                            <i className="bi bi-list-check"></i>
                        </span>
                    </Wrapper>
                </div>
                <div className="mt-4">
                    <label htmlFor="private">
                        Privacidade: 
                        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                            <i className="bi bi-question-circle ms-2"></i>
                        </OverlayTrigger>
                    </label>
                    <div className="my-2">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="public" value="public" onChange={(e) => setPrivacidade(e)} checked={newList?.privacidade === 'public'}/>
                            <label className="form-check-label" htmlFor="public">Publica <i className="bi bi-unlock"></i></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="private" value="private" onChange={(e) => setPrivacidade(e)} checked={newList?.privacidade === 'private'} />
                            <label className="form-check-label" htmlFor="private">Privada <i className="bi bi-lock"></i></label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="block" value="block" onChange={(e) => setPrivacidade(e)} checked={newList?.privacidade === 'block'} />
                            <label className="form-check-label" htmlFor="block">Bloqueada <i className="bi bi-key"></i></label>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="d-flex justify-content-end">
                    <div>
                        <div className="input-group">
                            <button className='btn grupo' onClick={addList}>
                                <i className={`bi bi-${title === 'light' ? 'brightness-high' : 'moon-stars'} me-1`}></i>Salvar
                            </button>
                            <button className='btn grupo' onClick={() => initializeList()}>
                                Limpar<i className={`bi bi-${title === 'light' ? 'cloud-lightning-rain' : 'wind'} ms-1`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </CardBlur>
        </Container>
    )
}

export default Add;