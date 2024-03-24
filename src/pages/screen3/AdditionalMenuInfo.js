import { Link } from 'react-router-dom';
import itemStyle from '../screen3/AddMenuItem.module.css';
import { useState } from 'react';

function AdditionalMenuInfo({menu, selected, setSelected, selectedQuantity, setSelectedQuantity, totalPrice, setTotalPrice}){

    const [isTrue,setIsTrue] = useState(false);

    const gotoStyle = {
        display:'inline-block',
        backgroundColor: isTrue?'orange':'white',
        cursor:'pointer'
    };

    const onClickHandler=()=>{
        
        if(!selected.some(item => item.menuCode === menu.menuCode)) {
            const selectedMenu = selected.concat({
                menuCode: menu.menuCode,
                menuName: menu.menuName,
                price: menu.price,
                image: menu.detail.image
            });
            const changedSelectedQuantity = selectedQuantity.concat({
                menuCode : menu.menuCode,
                quantity : 1
            });
            setSelected(selectedMenu);
            setSelectedQuantity(changedSelectedQuantity);
            setTotalPrice(totalPrice+menu.price);
        }
        setIsTrue(!isTrue);

        if(isTrue === true){
            const selectedMenu = selected.filter(item => item.menuCode !== menu.menuCode);
            setSelected(selectedMenu);
            setTotalPrice(totalPrice-menu.price);
        }
    }

    return(
        <>
            <div className={ itemStyle.MenuItem } onClick={ onClickHandler } style={gotoStyle}>
                <img className={ itemStyle.ImgItem } src={ menu.detail.image }/>
                <h3 className={ itemStyle.TextItem }>{ menu.menuName }</h3>
                <h3 className={ itemStyle.TextItem }>{ menu.price }</h3>
            </div>
        </>
    );
}

export default AdditionalMenuInfo;