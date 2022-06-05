import {ListItem} from '../listItem'
import {Lista} from '../../types/Lista'

type Props = {
    lista: Lista;
    handleDone: (done: boolean, i: number) => void;
    handleDeleteItem: (key: number) => void;
}

const RenderList = ({lista, handleDone, handleDeleteItem}:Props) => {
    return(
        <div>
            {lista.items.map((item, chave) => (
                <div>
                    <ListItem id={chave} item={item} handleDone={handleDone} handleDelete={handleDeleteItem}/>
                </div>
            ))}
        </div>
    )
}

export default RenderList;