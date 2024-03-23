import { Link } from 'react-router-dom';
import itemStyle from '../screen2/MenuItem.module.css';

function AdditionalMenuInfo({menu, selected, setSelected, totalPrice, setTotalPrice}){

    const onClickHandler=()=>{
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
    }

    return(
        <>
            <Link to="../">
                <div className={ itemStyle.MenuItem } onClick={ onClickHandler }>
                    <img className={ itemStyle.ImgItem } src={ menu.detail.image }/>
                    <h3 className={ itemStyle.TextItem }>{ menu.menuName }</h3>
                    <h3 className={ itemStyle.TextItem }>{ menu.price }</h3>
                </div>
            </Link>
        </>
    );
}

export default AdditionalMenuInfo;