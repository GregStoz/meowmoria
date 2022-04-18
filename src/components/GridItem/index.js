import * as C from './styles';
import logogato from '../../gatos/logogato.png';
import {items} from '../../data/items';

export const GridItem = ({item, onClick}) => {
    return (
        <C.Container onClick={onClick}>
            {item.permanentShown === false && item.shown === false &&
                <C.Icon src={logogato} alt="MEOWMÓRIA" />
            }
            { (item.permanentShown || item.shown) && item.item !== null && 
                <C.Icon src={items[item.item].img} alt="" />}
        </C.Container>
    );
}