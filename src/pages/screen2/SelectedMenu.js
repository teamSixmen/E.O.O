import { Link, useParams } from 'react-router-dom';
import itemStyle from './MenuItem.module.css';
import { useEffect, useState } from 'react';

function SelectedMenu({menu, selected, setSelected, selectedQuantity, setSelectedQuantity, totalPrice, setTotalPrice}){

    const [quantity,setQuantity] = useState(1);

    const findSelectedQuantity = selectedQuantity.findIndex(item => item.menuCode === menu.menuCode);
    
    const onClickPlus = ()=>{
        setQuantity(quantity+1);
        const changedSelectedQuantity = selectedQuantity.splice(findSelectedQuantity,1,{menuCode: menu.menuCode, quantity: quantity});
        setSelectedQuantity(changedSelectedQuantity);
        setTotalPrice(totalPrice+menu.price);
    }
    const onClickMinus = ()=>{
        if(quantity > 1){
            setQuantity(quantity-1);
            const changedSelectedQuantity = selectedQuantity.splice(findSelectedQuantity,1,{menuCode: menu.menuCode, quantity: quantity});
            setSelectedQuantity(changedSelectedQuantity);
            setTotalPrice(totalPrice-menu.price);
        }
    }
    const onClickRemove = ()=>{
        onRemove(menu.menuCode);
        setTotalPrice(totalPrice-(menu.price*quantity));
    }
    
    const onRemove = menuCode => {
        const changedSelected = selected.filter(item => item.menuCode !== menuCode);
        const changedSelectedQuantity = selectedQuantity.filter(item => item.menuCode !== menuCode);
        setSelected(changedSelected);
        setSelectedQuantity(changedSelectedQuantity);
    }

    useEffect(()=>{
        console.log(selected);
        console.log(selectedQuantity);
    })

    return(
        <div className={ itemStyle.MenuItem }>
            <img className={ itemStyle.ImgItem } src={menu.image}/>
            <h3 className={ itemStyle.TextItem }>{menu.menuName}</h3>
            <button onClick={ onClickPlus }>+</button>
            {quantity}
            <button onClick={ onClickMinus }>-</button>
            <button onClick={ onClickRemove } style={{ backgroundColor:'red', borderRadius:'15px', border:'10px', cursor:'pointer' }}>x</button>
            <h3 className={ itemStyle.TextItem }>{menu.price*quantity}</h3>
            <h1></h1>
        </div>
    );
}

export default SelectedMenu;