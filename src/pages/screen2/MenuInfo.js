import { Link } from 'react-router-dom';
import itemStyle from './MenuItem.module.css';

function MenuInfo({menu}){

    return(
        <Link to={`/menu/${menu.menuCode}`}>
            <div className={ itemStyle.MenuItem }>
                <img className={ itemStyle.ImgItem } src={menu.detail.image}/>
                <h3 className={ itemStyle.TextItem }>{menu.menuName}</h3>
                <h3 className={ itemStyle.TextItem }>{menu.price}</h3>
            </div>
        </Link>
    );
}

export default MenuInfo;