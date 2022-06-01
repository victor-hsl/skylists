import * as C from './styles'
import CardBlur from '../../components/cardBlur';
import { FormEvent, useState } from 'react';
import { auth } from '../../util/FirebaseConnection';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Alert } from 'react-bootstrap';

const Login = () => {
    const [show, setShow] = useState(0);
    const [inputType, setInputType] = useState('password');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const navigate = useNavigate();

    const handleInputType = () => {
        if(inputType === 'password'){
            setInputType('text');
        } else {
            setInputType('password');
        }
    }

    const login = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(email === '' || senha === ''){
            setMessage('Preencha todos os campos!');
            setShowAlert(true);
        } else {
            await signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
                navigate('/home');
            }).catch((e) => {
                console.error("Erro! Cod.: "+e.code+" Msg: "+e.message);
                setMessage('E-mail ou senha incorretos!');
                setShowAlert(true);
            })
        }
    }

    const register = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(newEmail === '' || pass1 === '' || pass2 === ''){
            setMessage('Preencha todos os campos!');
            setShowAlert2(true);
        } else {
            if(pass1 !== pass2) {
                setMessage('Senhas não coincidem!');
                setShowAlert2(true);
            } else {
                await createUserWithEmailAndPassword(auth, newEmail, pass1).then((userCredential) => {
                    navigate('/home');
                }).catch((e) => {
                    alert("Erro! Cod.: "+e.code+" MSG: "+e.message);
                })
            }
        }
    }

    return(
        <div className="pt-5">
                <CardBlur classe="col-lg-5 col-md-6 col-sm-8 col-10 mx-auto mt-sm-4 mt-5">
                    <C.Container className="p-4">
                        <div className="d-flex justify-content-center">
                            <button className="display-6 botao mb-2" value="login" onClick={(e) => {setShow(0);setShowAlert2(false)}}>Login</button>
                        </div>
                        {show === 0 && 
                            <div>
                                <form onSubmit={login}>                                
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input 
                                                id="email"
                                                type="email"
                                                spellCheck={false} 
                                                placeholder="E-mail"
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                            <div className="underline"/>
                                            <span className="icon">
                                                <i className="bi bi-person-circle"></i>
                                            </span>
                                        </C.Wrapper>
                                    </div>
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input
                                                id="password"
                                                type="password"
                                                spellCheck={false} 
                                                placeholder="Senha"
                                                onChange={(e) => setSenha(e.target.value)}
                                                required
                                            />
                                            <div className="underline"/>
                                            <span className="icon">
                                                <i className="bi bi-key-fill"></i>
                                            </span>
                                        </C.Wrapper>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <a href="#" className="forgot">Esqueceu sua senha?</a>   
                                    </div>
                                    <div className="d-flex justify-content-center my-3">
                                        <C.Submit type="submit">
                                            <i className="bi bi-door-open"></i>Logar
                                        </C.Submit>
                                    </div>
                                </form>                            
                            </div>                            
                        }
                        { showAlert === true &&
                            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                                {message}
                            </Alert>
                        }
                        <hr/>
                        {showAlert2 === true &&
                            <Alert variant="danger" onClose={() => setShowAlert2(false)} dismissible>
                                {message}
                            </Alert>
                        }
                        {show === 1 &&
                            <div>
                                <form onSubmit={register}>                                
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input 
                                                id="email"
                                                type="email"
                                                spellCheck={false} 
                                                placeholder="E-mail"
                                                onChange={(e) => setNewEmail(e.target.value)}
                                                required
                                            />
                                            <div className="underline"/>
                                            <span className="icon"><i className="bi bi-person-circle"></i></span>
                                        </C.Wrapper>
                                    </div>
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input
                                                id="pass1"
                                                name="pass1"
                                                type={inputType}
                                                spellCheck={false} 
                                                placeholder="Senha"
                                                onChange={(e) => setPass1(e.target.value)}
                                                required
                                            />
                                            <div className="underline"/>
                                            <span className="icon"><i className="bi bi-key-fill"></i></span>
                                        </C.Wrapper>
                                    </div>
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input
                                                id="pass2"
                                                name="pass2"
                                                type={inputType}
                                                spellCheck={false} 
                                                placeholder="Repita a senha"
                                                onChange={(e) => setPass2(e.target.value)}
                                                required
                                            />
                                            <div className="underline"/>
                                            <span className="icon"><i className="bi bi-lock-fill"></i></span>
                                        </C.Wrapper>
                                    </div>
                                    <div className="d-flex justify-content-center c mb-3">
                                        <button type="button" className={`botao ${inputType === 'password' ? 'c' : ''}`} onClick={handleInputType}><i className={`bi bi-eye-${inputType === 'password' ? 'slash-fill' : 'fill'}`} ></i> Exibir senha</button>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                    <button className="display-6 botao" value="cadastro" onClick={(e) => {setShow(1);setShowAlert(false)}}>Cadastro</button>
                                    {show === 1 &&
                                        <C.Submit className="ms-2" type="submit">
                                            <i className="bi bi-send-fill"></i>
                                        </C.Submit>
                                    }
                                </div>
                                </form>                                       
                            </div>
                        }
                        {show === 0 &&
                            <div className="d-flex justify-content-center">
                                <button className="display-6 botao" value="cadastro" onClick={(e) => {setShow(1);setShowAlert(false)}}>Cadastro</button>
                            </div>
                        }
                    </C.Container>
                </CardBlur>
        </div>
    )
}

export default Login;