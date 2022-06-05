import styled from "styled-components";

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