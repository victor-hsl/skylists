import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.text};

    .forgot{
        color: ${props => props.theme.secondary};
        font-size: 12px;
    }
    .botao{
        background: transparent;
        border: 0px;
        color: ${props => props.theme.text};
    }
    .c{
        color: ${props => props.theme.title === 'light' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)'};
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

export const Submit = styled.button`
    cursor: pointer;
    height: 2rem;
    padding: 0rem .75rem;
    border-radius: 0.375rem;
    background: #4503dc;
    color: #FFFAFF;
    box-shadow: 0 0.4rem 0 0 #3700b8;
    letter-spacing: 2px;
    transition: all .3s;
    border: 0;
    
    :active {
        transform: translateY(0.3rem);
        box-shadow: 0 0.2rem 0 0 #3700b8;
    }
`;