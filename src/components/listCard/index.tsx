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
import { useEffect } from 'react'

type Props = {
    icon: string;
    name: string;
}

const ListCard = ({icon, name} : Props) => {
    useEffect(() => {
    }, []);
    return(
        <C.Card>
            {icon === 'I0' &&
                <img src={I0} />
            }
            {icon === 'I1' &&
                <img src={I1} />
            }
            {icon === 'I2' &&
                <img src={I2} />
            }
            {icon === 'I3' &&
                <img src={I3} />
            }
            {icon === 'I4' &&
                <img src={I4} />
            }
            {icon === 'I5' &&
                <img src={I5} />
            }
            {icon === 'I6' &&
                <img src={I6} />
            }
            {icon === 'I7' &&
                <img src={I7} />
            }
            {icon === 'I8' &&
                <img src={I8} />
            }
            {icon === 'I9' &&
                <img src={I9} />
            }
            <div className='mt-1'>
                {name}
            </div>
        </C.Card>
    )
}

export default ListCard;