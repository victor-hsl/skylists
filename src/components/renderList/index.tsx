import {ListItem} from '../listItem'
import {Lista} from '../../types/Lista'

type Props = {
    lista: Lista;
    handleDone: (done: boolean, i: number) => void;
}

const RenderList = ({lista, handleDone}:Props) => {
    return(
        <div>
            {lista.items.map((item, chave) => (
                <div>
                    <ListItem id={chave} item={item} handleDone={handleDone}/>
                </div>
            ))}
        </div>
    )
}

export default RenderList;