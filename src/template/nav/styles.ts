import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.text};
`;

export const Box = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80px;
    border-radius: 30px;
    border 1px solid ${props => props.theme.border};
    background: ${props => props.theme.backgroundColor};

    .sub {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border 1px solid ${props => props.theme.border};
        background: ${props => props.theme.secondaryBackground};
    }
    .sub:hover{
        background: ${props => props.theme.hoverBackground};
    }
`;

export const NavButton = styled.label`
    .nav-inpt {
        position: absolute;
        transform: scale(0);
    }
    .nav-botao {
        width: 110px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: ${props => props.theme.activeBackground};
        padding: 0;
        height: 3rem;
        border-radius: 2rem;
    }
    .nav-icone {
        transition: all 0.35s;
        font-size: 1.5rem;
    }
    .nav-texto {
        font-size: 0.875rem;
        position: absolute;
        left: 0.5rem;
        top: 50%;
        transform: translateY(-50%) translateX(1.25rem);
        color: ${props => props.theme.activeBackground};
        visibility: hidden;
        opacity: 0;
        transition: all 0.35s;
    }
    .nav-inpt:checked ~ .nav-botao {
        background: ${props => props.theme.secondaryBackground};
        border: 1px solid ${props => props.theme.border};
    }
    .nav-inpt:checked ~ .nav-botao .nav-texto {
        visibility: visible;
        opacity: 1;
        transform: translateY(-50%) translateX(2.5rem);
    }
    .nav-inpt:checked ~ .nav-botao .nav-icone {
        transform: translateX(-1.5rem);
    }
`;