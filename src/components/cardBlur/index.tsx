import { ReactNode } from "react";
import styled from "styled-components";

const Card = styled.div`
    background-color: rgba(255, 255, 255, .05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: ${props => props.theme.title === 'light' ? 'blur(5px)' : 'blur(2px)'};
    border-radius: 8px;
`
type Props = {
    children: ReactNode;
    classe: string
}
const CardBlur = ({children, classe} : Props) => {
    return(
        <Card className={classe}>
            {children}
        </Card>
    )
}

export default CardBlur;