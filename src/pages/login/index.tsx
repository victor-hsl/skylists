import * as C from './styles'
import CardBlur from '../../components/cardBlur';
import { useState } from 'react';
const Login = () => {
    const [show, setShow] = useState(0);
    const [inputType, setInputType] = useState('password');

    const handleInputType = () => {
        if(inputType === 'password'){
            setInputType('text');
        } else {
            setInputType('password');
        }
    }
    return(
        <div className="pt-5">
                <CardBlur classe="col-lg-5 col-md-6 col-sm-8 col-10 mx-auto mt-sm-4 mt-5">
                    <C.Container className="p-4">
                        <div className="d-flex justify-content-center">
                            <button className="display-6 botao mb-2" value="login" onClick={(e) => setShow(0)}>Login</button>
                        </div>
                        {show === 0 && 
                            <div>
                                <form>                                
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input 
                                                id="email"
                                                type="text"
                                                spellCheck={false} 
                                                placeholder="E-mail"
                                            />
                                            <div className="underline"/>
                                            <span className="icon"><i className="bi bi-person-circle"></i></span>
                                        </C.Wrapper>
                                    </div>
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input
                                                id="password"
                                                type="password"
                                                spellCheck={false} 
                                                placeholder="Senha"
                                            />
                                            <div className="underline"/>
                                            <span className="icon"><i className="bi bi-key-fill"></i></span>
                                        </C.Wrapper>
                                    </div>
                                </form>                            
                                <div className="d-flex justify-content-center">
                                    <a href="#" className="forgot">Esqueceu sua senha?</a>   
                                </div>
                                <div className="d-flex justify-content-center my-3">
                                    <C.Submit>
                                        <i className="bi bi-door-open"></i>Logar
                                    </C.Submit>
                                </div>
                            </div>
                        }
                        <hr/>
                        {show === 1 &&
                            <div>
                                <form>                                
                                    <div className="d-flex justify-content-center mb-2">
                                        <C.Wrapper>
                                            <input 
                                                id="email"
                                                type="text"
                                                spellCheck={false} 
                                                placeholder="E-mail"
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
                                    <div className="d-flex justify-content-center c mb-2">
                                        <button type="button" className={`botao ${inputType === 'password' ? 'c' : ''}`} onClick={handleInputType}><i className={`bi bi-eye-${inputType === 'password' ? 'slash-fill' : 'fill'}`} ></i> Exibir senha</button>
                                    </div>
                            </div>
                        }
                        <div className="d-flex justify-content-center">
                            <button className="display-6 botao" value="cadastro" onClick={(e) => setShow(1)}>Cadastro</button>
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