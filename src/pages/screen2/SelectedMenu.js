import { Link, useParams } from 'react-router-dom';
import itemStyle from './MenuItem.module.css';
import { useState } from 'react';

function SelectedMenu({menu, selected, setSelected}){

    const [quantity,setQuantity] = useState(1);

    const onClickHandler = ()=>{
        //remove
    }
    const onClickPlusHandler = ()=>{
        setQuantity(quantity+1);
        console.log(quantity);
    }
    const onClickMinusHandler = ()=>{
        if(quantity > 1){
            setQuantity(quantity-1);
        } else {
            onRemove(menu.menuCode);
        }
    }

    const onRemove = menuCode => {
        const changedSelected = selected.filter(menu => menu.menuCode !== menuCode);
        setSelected(changedSelected);
    }

    return(
        <div className={ itemStyle.MenuItem } onClick={onClickHandler}>
            <img className={ itemStyle.ImgItem } src={menu.image}/>
            <h3 className={ itemStyle.TextItem }>{menu.menuName}</h3>
            <button onClick={onClickPlusHandler}>+</button>
            {quantity}
            <button onClick={onClickMinusHandler}>-</button>
            <h3 className={ itemStyle.TextItem }>{menu.price}</h3>
        </div>
    );
}

export default SelectedMenu;