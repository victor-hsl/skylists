import styled from "styled-components";

export const Container = styled.div`
    color: ${props => props.theme.text};
`;

export const Area = styled.div`
    width: 100%;
    background: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.border};
    border-radius: 16px;
`;

export const Back = styled.button`
    background: ${props => props.theme.secondaryBackground};
    border: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.text};
    border-radius: 6px;
    font-size: 14px;
`;

export const ListName = styled.input`

`