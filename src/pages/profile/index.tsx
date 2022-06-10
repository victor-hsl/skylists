import { auth } from "../../util/FirebaseConnection";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CardBlur from "../../components/cardBlur";
import { Alert } from 'react-bootstrap';
import Nav from "../../template/nav";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {Container, Wrapper} from './styles'
import {deleteUser, onAuthStateChanged, User } from "firebase/auth";
import { Accordion } from "react-bootstrap";
const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();
    const [newPassword, setNewPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [show, setShow] = useState(false);
    const [end, setEnd] = useState('');
    const [message, setMessage] = useState('');
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            } else {
                navigate('/login');
            }
        })
    }, []);

    const handleInputType = () => {
        if(inputType === 'password'){
            setInputType('text');
        } else {
            setInputType('password');
        }
    }

    return(
        <Container className="px-2">
            <CardBlur classe="container mt-2 py-4 px-2 px-sm-3 px-md-4">
                <Nav checked="p" add />
                <hr/>
                <Tabs defaultActiveKey="info" id="uncontrolled-tab-example" className="aba">
                    <Tab eventKey="info" title="Informações" className="abas py-4 px-2 px-sm-3 px-md-4">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Usuário</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <h4>Criação de novo usuário</h4>
                                            <ol type="1">
                                                <li>Faça logout clicando no botão <strong><i className="bi bi-power"/> Sair</strong> localizado na parte superior esquerda do aplicativo.</li>
                                                <li>Na tela de login, clique em <strong>Cadastro</strong> para exibir o formulário de registro.</li>
                                                <li>Informe o e-mail do novo usuário, o app não aceitará e-mails sem <strong>@</strong> e <strong>.com</strong></li>
                                                <li>Em seguida informe a senha, somente senhas com mais de <strong>6 caracteres</strong> serão aceitas.</li>
                                                <li>Confirme a senha e clique no botão para finalizar o cadastro.</li>
                                                <li>Após o cadastro o usuário recebe uma lista vazia.</li>
                                            </ol>
                                        </li>
                                        <li>
                                            <h4>Exclusão de usuário</h4>
                                            <ol type="1">
                                                <li>Com o usuário que será excluido logado, clique no menu no icone <i className="bi bi-person"/></li>
                                                <li>Em seguida clique na aba excluir perfil e confirme a exclusão.</li>
                                                <li>Os dados do usuário serão excluidos do sistema permanentemente.</li>
                                                <li>Caso haja algum problema ao excluir, entre em contato com o suporte via e-mail: victor.s.lima@ufms.br</li>
                                            </ol>
                                        </li>
                                        <li>                                        
                                            <h4>Dados do usuário</h4>
                                            <p className="ms-3">O código identificador de usuário é criptografado pela API do google, dessa forma apenas o próprio aplicativo é capaz de descriptografar e reconhecer um usuário</p>
                                            <p className="ms-3">Da mesma forma o código de identificação das listas é criptografado, para garantir a segurança dos dados inseridos na mesma.</p>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Listas</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>
                                            <h4>Adicionar lista</h4>
                                            <ol type="1">
                                                <li>No menu de navegação, clique em <i className="bi bi-clipboard-plus"/> para incluir uma nova lista.</li>
                                                <li>Selecione o icone que deseja aplicar a lista.</li>
                                                <li>Informe um nome para a lista.</li>
                                                <li>Tanto o icone quanto o nome da lista podem ser editados futuramente.</li>
                                                <li>Escolha a privacidade da lista, clicando no icone <i className="bi bi-question-circle"/> é exibido a descrição de cada tipo de privacidade.</li>
                                            </ol>
                                        </li>
                                        <li>
                                            <h4>Editar lista</h4>
                                            <ol type="1">
                                                <li>Salvar alterações - Para salvar e continuar editando a lista clique no botão <i className="bi bi-save"/>, ao clicar no botao voltar <i className="bi bi-clipboard-x"/> a lista será salva antes de retornar a home page.</li>
                                                <li>Alterar nome - Basta clicar no nome da lista, será exibida uma caixa de edição, após isso clique em salvar no menu inferior.</li>
                                                <li>Alterar icone - Clique no icone atual, será exibida a lista de icones, escolha o icone desejado e clique em salvar no menu inferior.</li>
                                            </ol>
                                        </li>
                                        <li>
                                            <h4>Excluir lista</h4>
                                            <ol type="1">
                                                <li>No menu inferior da exibição de lista, basta clicar no botão <i className="bi bi-trash3"/>.</li>
                                                <li>A lista e todos os dados contidos nela serão excluidos permanentemente do sistema.</li>
                                            </ol>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Tab>
                    <Tab eventKey="sobre" title="Sobre o App" className="abas py-4 px-2 px-sm-3 px-md-4">
                        <div>
                            <h4><strong>Implementação</strong><i className="bi bi-braces-asterisk ms-2"/></h4>
                            <p>Este aplicativo foi desenvolvido em React, framework baseado em JavaScript</p>
                            <p>Todos os dados são gravados e gerenciados pela API Firebase, fornecida pelo google como BAAS (Backend as a service)</p>
                            <h4><strong>Ferramentas utilizadas</strong><i className="bi bi-tools ms-2"/></h4>
                            <ul>
                                <li>HTML
                                    <svg viewBox="0 0 128 128" width="20px" className="ms-1">
                                        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                                    </svg>
                                </li>
                                <li>CSS
                                    <svg viewBox="0 0 128 128" width="20px" className="ms-1">
                                        <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                                    </svg>
                                </li>
                                <li>TypeScript
                                    <svg viewBox="0 0 128 128" width="20px" className="ms-1">
                                        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
                                    </svg>
                                </li>
                                <li>React
                                    <svg viewBox="0 0 128 128" width="20px" className="ms-1">
                                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                                    </svg>
                                </li>
                                <li>Firebase
                                    <svg viewBox="0 0 128 128" width="20px" className="ms-1">
                                        <path fill="#f58220" d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"></path>
                                    </svg>
                                </li>
                                <li>Bootstrap
                                    <svg viewBox="0 0 128 128" width="20px" className="ms-1">
                                        <defs><linearGradient id="bootstrap-original-a" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613) scale(.24566)" gradientUnits="userSpaceOnUse"><stop stop-color="#9013fe" offset="0"></stop><stop stop-color="#6610f2" offset="1"></stop></linearGradient><linearGradient id="bootstrap-original-b" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" offset="0"></stop><stop stop-color="#f1e5fc" offset="1"></stop></linearGradient><filter id="bootstrap-original-c" x="161.9" y="135.46" width="197" height="249" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs><path d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z" fill="url(#bootstrap-original-a)"></path><path transform="translate(1.494 2.203) scale(.24566)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z" fill="url(#bootstrap-original-b)" filter="url(#bootstrap-original-c)" stroke="#fff"></path>
                                    </svg>
                                </li>
                                <li>VisualStudio
                                    <svg viewBox="0 0 128 128" width="20px" className="ms-1">
                                        <path fill="#68217a" d="M95 2.3l30.5 12.3v98.7l-30.7 12.4-49-48.7-31 24.1-12.3-6.2V33.1l12.3-5.9 31 24.3zM14.8 45.7v37.5l18.5-19zm48.1 18.5l31.9 25.1V39z"></path>
                                    </svg>
                                </li>
                            </ul>
                            <h4><strong>Código Fonte</strong><i className="bi bi-code-slash ms-2"/></h4>
                            <div className="ms-2 mb-2" >
                                <a href="https://github.com/victor-hsl/skylists" target="_blank">Git Hub Repository</a>
                                <svg viewBox="0 0 128 128" width="20px" className="ms-2">
                                    <g fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
                                </svg>
                            </div>                            
                            <h4><strong>Versão</strong><i className="bi bi-info-circle ms-2"/></h4>
                            <p className="ms-2">1.0.0</p>
                        </div>
                    </Tab>
                    <Tab eventKey="excluir" title="Excluir Perfil" className="abas py-4 px-2 px-sm-3 px-md-4">
                        <div>
                            <div className="d-flex justify-content-center">Deseja realmente excluir seu perfil?</div>
                            <div className="d-flex justify-content-center text-muted">Esta ação removerá permanentemente seus dados</div>
                            <div className="d-flex justify-content-center mt-3">
                                <button className="btn btn-danger"><i className="bi bi-trash3"></i> Excluir</button>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </CardBlur>
        </Container>
    )
}

export default Profile;