import styled from 'styled-components';

type IconCardProps = {
    active: boolean;
    border: string;
    backgroundColor: string;
    text: string;
    activeBackground: string;
}

export const Container = styled.div`
    color: ${props => props.theme.text};

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
`;

export const IconContainer = styled.div`
    width: 100%;
    border: 1px solid ${props => props.theme.border};
    border-radius: 10px;
    background: ${props => props.theme.secondaryBackground};
    display: flex;
    column-gap: 10px;
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
`

export const IconCard = styled.button(({active, border, backgroundColor, text, activeBackground} : IconCardProps) => (`
    padding: 20px;
    border-radius: 10px;
    width: 106px;
    border: 1px solid ${border};
    background: ${active ? activeBackground : backgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${text};
`));


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
`;