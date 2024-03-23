import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { getSingleMenu } from '../../apis/menuAPI';
import { getSetMenu } from '../../apis/menuAPI';
import { getChickenMenu } from '../../apis/menuAPI';
import { getSideMenu } from '../../apis/menuAPI';
import { getDrinkMenu } from '../../apis/menuAPI';

import SelectedMenu from './SelectedMenu';

import MenuInfo from './MenuInfo';


function MainMenu(){

    const tapStyle = {
        margin: '3px',
        display:'inline-block',
        cursor:'pointer'
    };

    const [category,setcategory] = useState(1);

    const [singleMenu,setSingleMenu] = useState([]);
    const [setMenu ,setSetMenu] = useState([]);
    const [chickenMenu,setChickenMenu] = useState([]);
    const [sideMenu,setSideMenu] = useState([]);
    const [drinkMenu,setDrinkMenu] = useState([]);

    const [selected,setSelected] = useState([]);

    const [totalPrice,setTotalPrice] = useState(0);

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

    return(
        <>
            <div>
                <div style={{borderBottom:'1px solid'}}>
                    <div>
                        {selected.map((menu)=><SelectedMenu key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    </div>
                    <div style={{textAlign:'end',lineHeight:'30px'}}>
                        {totalPrice}
                        <Link to="/payment">주문하기</Link>
                    </div>
                </div>

                <button name="single" onClick={onClickHandler} style={tapStyle}>단품</button>
                <button name="set" onClick={onClickHandler} style={tapStyle}>세트</button>
                <button name="chicken" onClick={onClickHandler} style={tapStyle}>치킨</button>
                <button name="side" onClick={onClickHandler} style={tapStyle}>사이드</button>
                <button name="drink" onClick={onClickHandler} style={tapStyle}>음료</button>

                <div style={{backgroundColor:'blue',float:'right',width:'700px'}}>
                    {category === 1 && singleMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    {category === 2 && setMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    {category === 3 && chickenMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    {category === 4 && sideMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                    {category === 5 && drinkMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
                </div>
            </div>
        </>
    );
}

export default MainMenu;