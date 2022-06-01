import * as C from './styles'
import CardBlur from '../../components/cardBlur';
import { FormEvent, useState } from 'react';
import { auth } from '../../util/FirebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Alert } from 'react-bootstrap';

const Login = () => {
    const [show, setShow] = useState(0);
    const [inputType, setInputType] = useState('password');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
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

    return(
        <div className="pt-5">
                <CardBlur classe="col-lg-5 col-md-6 col-sm-8 col-10 mx-auto mt-sm-4 mt-5">
                    <C.Container className="p-4">
                        <div className="d-flex justify-content-center">
                            <button className="display-6 botao mb-2" value="login" onClick={(e) => {setShow(0);setShowAlert(false)}}>Login</button>
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
                        {show === 1 &&
                            <div>
                                <form>                                
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input 
                                                id="email"
                                                type="email"
                                                spellCheck={false} 
                                                placeholder="E-mail"
                                                required
                                            />
                                            <div className="underline"/>
                                            <span className="icon"><i className="bi bi-person-circle"></i></span>
                                        </C.Wrapper>
                                    </div>
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input
                                                id="password"
                                                type={inputType}
                                                spellCheck={false} 
                                                placeholder="Senha"
                                            />
                                            <div className="underline"/>
                                            <span className="icon"><i className="bi bi-key-fill"></i></span>
                                        </C.Wrapper>
                                    </div>
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input
                                                id="password2"
                                                type={inputType}
                                                spellCheck={false} 
                                                placeholder="Repita a senha"
                                            />
                                            <div className="underline"/>
                                            <span className="icon"><i className="bi bi-lock-fill"></i></span>
                                        </C.Wrapper>
                                    </div>
                                </form>   
                                    <div className="d-flex justify-content-center c mb-3">
                                        <button type="button" className={`botao ${inputType === 'password' ? 'c' : ''}`} onClick={handleInputType}><i className={`bi bi-eye-${inputType === 'password' ? 'slash-fill' : 'fill'}`} ></i> Exibir senha</button>
                                    </div>
                            </div>
                        }
                        <div className="d-flex justify-content-center">
                            <button className="display-6 botao" value="cadastro" onClick={(e) => {setShow(1);setShowAlert(false)}}>Cadastro</button>
                            {show === 1 &&
                                <C.Submit className="ms-2">
                                    <i className="bi bi-send-fill"></i>
                                </C.Submit>
                            }
                        </div>
                    </C.Container>
                </CardBlur>
        </div>
    )
}

export default Login;