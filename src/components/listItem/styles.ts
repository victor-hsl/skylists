import styled from 'styled-components'

type ContainerProps = {
    done: boolean,
    secondary: string,
    text: string,
    del: string;
}


export const Container = styled.label(({done, secondary, text, del} : ContainerProps) => (
    `
    display: flex;
    background-color: ${secondary};
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    opacity: ${done ? '0.5' : '1'};
    input {
        width: 25px;
        height: 25px;
    }

    label {
        color: ${text};
        width: 100%;
        text-decoration: ${done ? 'line-through' : 'initial'};
        font-size: 1.25rem;
    }

    .botao{
        background: ${del};
        color: ${text};
    }
`
))