import { Link, Navigate } from 'react-router-dom';
import itemStyle from './MenuItem.module.css';
import { useEffect } from 'react';

function MenuInfo({menu, category, isSingle, setIsSingle, selected, setSelected, totalPrice, setTotalPrice}){

    const onClickHandler = () => {

        if(!selected.some(item => item.menuCode === menu.menuCode)) {
            const selectedMenu = selected.concat({
                menuCode: menu.menuCode,
                menuName: menu.menuName,
                price: menu.price,
                image: menu.detail.image
            });
            setSelected(selectedMenu);
            setTotalPrice(totalPrice+menu.price);
        }
        
        if(category === 1 & !isSingle) {
            setIsSingle(!isSingle);
        }

        if(category === 1) {
            <Link to={`/menu/${menu.menuCode}`}>
                <div className={ itemStyle.MenuItem } onClick={ onClickHandler }>
                    <img className={ itemStyle.ImgItem } src={ menu.detail.image }/>
                    <h3 className={ itemStyle.TextItem }>{ menu.menuName }</h3>
                    <h3 className={ itemStyle.TextItem }>{ menu.price }</h3>
                </div>
            </Link>
        }
    }
    
    return(
        <>
            <div className={ itemStyle.MenuItem } onClick={ onClickHandler }>
                <img className={ itemStyle.ImgItem } src={ menu.detail.image }/>
                <h3 className={ itemStyle.TextItem }>{ menu.menuName }</h3>
                <h3 className={ itemStyle.TextItem }>{ menu.price }</h3>
            </div>
        </>
    );
}

export default MenuInfo;