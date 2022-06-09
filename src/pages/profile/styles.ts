import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.text};

    .aba{
        border-bottom: 1px solid ${props => props.theme.border};
    }

    .aba button {
        color: ${props => props.theme.text};
        background: ${props => props.theme.secondaryBackground};
        border: 1px solid ${props => props.theme.border};
    }

    .abas {
        color: ${props => props.theme.text};
        background: ${props => props.theme.backgroundColor};
        border: 1px solid ${props => props.theme.border};
        border-top: 0px;
        border-radius: 0 0 5px 5px;
    }

    .nav-link.active {
        color: ${props => props.theme.text};
        background: ${props => props.theme.backgroundColor};
        border: 1px solid ${props => props.theme.border};
        border-bottom: 1px solid ${props => props.theme.backgroundColor};
    }

    .grupo {
        color: ${props => props.theme.text};
        background: ${props => props.theme.secondaryBackground};
        border: 1px solid ${props => props.theme.border};
    }

    .grupo:active {
        color: ${props => props.theme.title === 'light' ? '#fff' : '#000'};
        background: ${props => props.theme.activeBackground};
    }

    .grupo:focus {
        color: ${props => props.theme.title === 'light' ? '#fff' : '#000'};
        background: ${props => props.theme.activeBackground};
    }
    .botao{
        background: transparent;
        margin-top: 10px;
        border: 0px;
        color: ${props => props.theme.text};
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    height: 3rem;
    .icon {
        position: absolute;
        top: 50%;
        left: 0;
        font-size: 1.675rem;
        transform: translateY(-50%);
        color: rgba(${props => props.theme.title === 'dark' ? '255,255,255,' : '0,0,0,'}0.4);
        pointer-events: none;
        transition: all 0.35s;
    }
    .underline{
        content: "";
        display: block;
        position: absolute;
        z-index: 1;
        left: 0;
        bottom: 0;
        transform: scaleX(0);
        width: 100%;
        height: 2px;
        background: ${props => props.theme.secondary};
        transition: all 0.35s;
    }
    input {
        height: inherit;
        padding-left: 2.5rem;
        border: 0;
        border-bottom: 2px solid rgba(${props => props.theme.title === 'dark' ? '255,255,255,' : '0,0,0,'}0.4);
        outline: none;
        background: transparent;
        color: ${props => props.theme.text};
        font-size: 1rem;
        transiton: all 0.35s;
    }
    input:focus ~ .icon { 
        color: ${props => props.theme.secondary};    
    }

    input:focus ~ .underline {
        transform: scaleX(1);
    }
`
