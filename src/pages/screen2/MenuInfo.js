import { Link } from 'react-router-dom';
import itemStyle from './MenuItem.module.css';

function MenuInfo({menu,selected,setSelected}){

    const onClickHandler = () => {
        if(!selected.some(item => item.menuCode === menu.menuCode)) {
            const selectedMenu = selected.concat({
                menuCode: menu.menuCode,
                menuName: menu.menuName,
                price: menu.price,
                image: menu.detail.image
            });
            setSelected(selectedMenu);
        }
    }

    return(
        <div className={ itemStyle.MenuItem } onClick={onClickHandler}>
            <img className={ itemStyle.ImgItem } src={menu.detail.image}/>
            <h3 className={ itemStyle.TextItem }>{menu.menuName}</h3>
            <h3 className={ itemStyle.TextItem }>{menu.price}</h3>
        </div>
    );
}

export default MenuInfo;