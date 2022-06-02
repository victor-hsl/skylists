import styled from "styled-components";

export const Card = styled.button`
    padding: 20px;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.border};
    background: ${props => props.theme.backgroundColor};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.text};
`;