import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.text};
`;

export const Box = styled.div`
    width: 200px;
    height: 90px;
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
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: ${props => props.theme.text};
        padding: 0.5rem;
    }
    .nav-icone {
        transition: all 0.35s;
    }
    .nav-texto {
        font-size: 15px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        color: #57baf5;
        visibility: hidden;
        opacity: 0;
        transition: all 0.35s;
    }
    .nav-inpt:checked ~ .nav-botao {
        color: #57baf5;
    }
    .nav-inpt:checked ~ .nav-botao .nav-texto {
        visibility: visible;
        opacity: 1;
    }
    .nav-inpt:checked ~ .nav-botao .nav-icone {
        transform: translateY(-9px);
    }
`;

export const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template: auto / auto auto;
    gap: 20px;
    @media (min-width: 576px){
        grid-template: auto / auto auto auto;
    }

    @media (min-width: 768px){
        grid-template: auto / auto auto auto auto;
    }
    @media (min-width: 992px){
        grid-template: auto / auto auto auto auto auto;
    }
`;

export const GridItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;