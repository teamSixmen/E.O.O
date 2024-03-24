import { useEffect, useState } from 'react';
import itemStyle from './PayMenuItem.module.css';

function OnlyPayment({menu}){

    return(
        <>
            <div className={ itemStyle.MenuItem }>
                <img className={ itemStyle.ImgItem } src={ menu.image }/>
                <h3 className={ itemStyle.TextItem }>{ menu.menuName }</h3>
                <h3 className={ itemStyle.TextItem }>{ menu.price }</h3>
            </div>
        </>
    );
}

export default OnlyPayment;