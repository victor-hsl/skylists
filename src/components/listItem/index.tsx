import * as C from './styles'
import {useState, useContext} from 'react'
import { Lista } from '../../types/Lista';
import { ThemeContext } from 'styled-components';

type Props = {
    id: number;
    item: {
        description: string, 
        status: boolean
    };
    handleDone: (done: boolean, i: number) => void;
}

export const ListItem = ({id, item, handleDone}: Props) => {
    const [isChecked, setIsChecked] = useState(item.status);
    const { secondaryBackground, text } = useContext(ThemeContext);
    return(
        <C.Container done={isChecked} secondary={secondaryBackground} text={text}  htmlFor={`${id}`}>
            <input 
                id={`${id}`}
                type="checkbox" 
                checked={isChecked}
                onChange={(e) => {handleDone(e.target.checked, id);setIsChecked(e.target.checked);}}
            />
            <label htmlFor={`${id}`}>{item.description}</label>
        </C.Container>
    )
}


