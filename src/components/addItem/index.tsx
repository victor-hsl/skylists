import styled from 'styled-components'
import { useState, KeyboardEvent } from 'react'
const Container = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme.border};
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    align-items: center;

    .image {
        margin-right: 5px;
        color: ${props => props.theme.text}
    }

    input {
        background: transparent;
        border: 0px;
        outline: 0;
        color: ${props => props.theme.text};
        font-size: 18px;
        flex: 1
        
    }

    input::placeholder {
        color: ${props => props.theme.text};
        opacity: 0.25;
    }
`
type Props = {
    onEnter: (taskName: string) => void
}
const AddItem = ({onEnter}:Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }
    return(
        <Container>
            <div className="image" onClick={(e) => {if(inputText !== ''){onEnter(inputText); setInputText('');}}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
            </div>
            <input
                type="text"
                value={inputText}
                placeholder="Novo item"
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />  
        </Container>
    )
}

export default AddItem;