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

    useEffect(()=>{
        if     (category === 1) setSingleMenu(getSingleMenu());
        else if(category === 2) setSetMenu(getSetMenu());
        else if(category === 3) setChickenMenu(getChickenMenu());
        else if(category === 4) setSideMenu(getSideMenu());
        else if(category === 5) setDrinkMenu(getDrinkMenu());
    },[category]);

    const onClickSingleHandler= ()=>{
        setcategory(1);
    }
    const onClickSetHandler= ()=>{
        setcategory(2);
    }
    const onClickChickenHandler= ()=>{
        setcategory(3);
    }
    const onClickSideHandler= ()=>{
        setcategory(4);
    }
    const onClickDrinkHandler= ()=>{
        setcategory(5);
    }

    return(
        <>
            <div>
                <div style={{borderBottom:'1px solid'}}>
                    <div>
                        {selected.map((menu)=><SelectedMenu key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected}/>)}
                    </div>
                    <div style={{textAlign:'end',lineHeight:'30px'}}>
                        <Link to="/payment">주문하기</Link>
                    </div>
                </div>

                <button onClick={onClickSingleHandler} style={tapStyle}>단품</button>
                <button onClick={onClickSetHandler} style={tapStyle}>세트</button>
                <button onClick={onClickChickenHandler} style={tapStyle}>치킨</button>
                <button onClick={onClickSideHandler} style={tapStyle}>사이드</button>
                <button onClick={onClickDrinkHandler} style={tapStyle}>음료</button>

                <div style={{backgroundColor:'blue',float:'right',width:'700px'}}>
                    {category === 1 && singleMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected}/>)}
                    {category === 2 && setMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected}/>)}
                    {category === 3 && chickenMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected}/>)}
                    {category === 4 && sideMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected}/>)}
                    {category === 5 && drinkMenu.map((menu)=><MenuInfo key={menu.menuCode} menu={menu} selected={selected} setSelected={setSelected}/>)}
                </div>
            </div>
        </>
    );
}

export default MainMenu;