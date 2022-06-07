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
        padding: 40px;
    }

    .nav-link.active {
        color: ${props => props.theme.text};
        background: ${props => props.theme.backgroundColor};
        border: 1px solid ${props => props.theme.border};
        border-bottom: 1px solid ${props => props.theme.backgroundColor};
    }
`;