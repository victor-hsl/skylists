import * as C from './styles'
import I0 from '../../assets/listIcons/0.png'
import I1 from '../../assets/listIcons/1.png'
import I2 from '../../assets/listIcons/2.png'
import I3 from '../../assets/listIcons/3.png'
import I4 from '../../assets/listIcons/4.png'
import I5 from '../../assets/listIcons/5.png'
import I6 from '../../assets/listIcons/6.png'
import I7 from '../../assets/listIcons/7.png'
import I8 from '../../assets/listIcons/8.png'
import I9 from '../../assets/listIcons/9.png'
import { useEffect, useState } from 'react';
import IconRender from '../iconRender'
import { useNavigate } from 'react-router'
type Props = {
    icon: string;
    name: string;
    idList: string;
    idUser: string | any;
}

const ListCard = ({icon, name, idList, idUser} : Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/list/${idUser}/${idList}`);
    }
    return(
        <C.Card onClick={handleClick}>
            <IconRender icon={icon}/>
            <div className='mt-1'>
                {name}
            </div>
        </C.Card>
    )
}

export default ListCard;