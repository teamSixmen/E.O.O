import { useEffect, useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';

import itemStyle from './MenuItem.module.css';

import { getSingleMenu } from '../../apis/menuAPI';
import { getSetMenu } from '../../apis/menuAPI';
import { getChickenMenu } from '../../apis/menuAPI';
import { getSideMenu } from '../../apis/menuAPI';
import { getDrinkMenu } from '../../apis/menuAPI';

import SelectedMenu from './SelectedMenu';

import MenuInfo from './MenuInfo';

function MainMenu({selected, setSelected, totalPrice, setTotalPrice}){

    const [category,setcategory] = useState(1);

    const [singleMenu,setSingleMenu] = useState([]);
    const [setMenu ,setSetMenu] = useState([]);
    const [chickenMenu,setChickenMenu] = useState([]);
    const [sideMenu,setSideMenu] = useState([]);
    const [drinkMenu,setDrinkMenu] = useState([]);

    const [isSingle,setIsSingle] = useState(false);

    useEffect(()=>{
        if     (category === 1) setSingleMenu(getSingleMenu());
        else if(category === 2) setSetMenu(getSetMenu());
        else if(category === 3) setChickenMenu(getChickenMenu());
        else if(category === 4) setSideMenu(getSideMenu());
        else if(category === 5) setDrinkMenu(getDrinkMenu());
    },[category]);

    const onClickHandler= (e)=>{
        if( e.target.name === 'single' ) setcategory(1);
        else if( e.target.name === 'set' ) setcategory(2);
        else if( e.target.name === 'chicken' ) setcategory(3);
        else if( e.target.name === 'side' ) setcategory(4);
        else if( e.target.name === 'drink' ) setcategory(5);
    }

    if(category===1 & isSingle){
        return <Navigate to={`/menu/${selected.menuCode}`}/>
    }

    return(
        <>
            <div>
                <div style={{borderBottom:'1px solid'}}>
                    <div>
                        {selected.map((menu)=><SelectedMenu key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    </div>
                    <div style={{textAlign:'end',lineHeight:'30px'}}>
                        {totalPrice}원
                        <button>
                            <Link to="/payment">주문하기</Link>
                        </button>
                    </div>
                </div>

                <button className={ itemStyle.TapStyle } name="single" onClick={onClickHandler}>단품</button>
                <button className={ itemStyle.TapStyle } name="set" onClick={onClickHandler}>세트</button>
                <button className={ itemStyle.TapStyle } name="chicken" onClick={onClickHandler}>치킨</button>
                <button className={ itemStyle.TapStyle } name="side" onClick={onClickHandler}>사이드</button>
                <button className={ itemStyle.TapStyle } name="drink" onClick={onClickHandler}>음료</button>

                <div style={{backgroundColor:'blue',float:'right',width:'700px'}}>
                    {category === 1 && singleMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} category={category} isSingle={isSingle} setIsSingle={setIsSingle} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    {category === 2 && setMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} category={category} isSingle={isSingle} setIsSingle={setIsSingle} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    {category === 3 && chickenMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} category={category} isSingle={isSingle} setIsSingle={setIsSingle} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    {category === 4 && sideMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} category={category} isSingle={isSingle} setIsSingle={setIsSingle} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    {category === 5 && drinkMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} category={category} isSingle={isSingle} setIsSingle={setIsSingle} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                </div>
            </div>
        </>
    );
}

export default MainMenu;