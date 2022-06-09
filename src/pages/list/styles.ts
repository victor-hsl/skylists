import styled from "styled-components";
type IconCardProps = {
    active: boolean;
    border: string;
    backgroundColor: string;
    text: string;
    activeBackground: string;
}

export const Container = styled.div`
    color: ${props => props.theme.text};
`;

export const Area = styled.div`
    width: 100%;
    background: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.border};
    border-radius: 16px;

    .grupo {
        color: ${props => props.theme.text};
        background: ${props => props.theme.secondaryBackground};
        border: 1px solid ${props => props.theme.border};
        padding: 10px 25px;
        font-size: 20px;
    }

    .grupo:active {
        color: ${props => props.theme.title === 'light' ? '#fff' : '#000'};
        background: ${props => props.theme.activeBackground};
    }

    .grupo:focus {
        color: ${props => props.theme.title === 'light' ? '#fff' : '#000'};
        background: ${props => props.theme.activeBackground};
    }

    .iconButton {
        margin: 0;
        padding: 0;
        border: 0px;
        background: transparent;
    }

    .popover {
        background: transparent;
    }

    .copy {
        cursor: pointer;
        font-size: 20px;
    }
`;

export const Back = styled.button`
    background: ${props => props.theme.secondaryBackground};
    border: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.text};
    border-radius: 6px;
    font-size: 14px;
`;

export const ListName = styled.input`
    background: transparent;
    border: 0;
    width: 100%;
    text-align: right;
    color: ${props => props.theme.text};

`

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