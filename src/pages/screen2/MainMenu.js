import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { getSingleMenu } from '../../apis/menuAPI';
import { getSetMenu } from '../../apis/menuAPI';
import { getChickenMenu } from '../../apis/menuAPI';
import { getSideMenu } from '../../apis/menuAPI';
import { getDrinkMenu } from '../../apis/menuAPI';

function MainMenu(){

    const [singleMenu,setSingleMenu] = useState([]);
    const [setMenu ,setSetMenu] = useState([]);
    const [chickenMenu,setChickenMenu] = useState([]);
    const [sideMenu,setSideMenu] = useState([]);
    const [drinkMenu,setDrinkMenu] = useState([]);

    useEffect(()=>{
        setSingleMenu(getSingleMenu());
    },[singleMenu]);

    useEffect(()=>{
        setSetMenu(getSetMenu());
    },[setMenu]);

    useEffect(()=>{
        setChickenMenu(getChickenMenu());
    },[chickenMenu]);

    useEffect(()=>{
        setSideMenu(getSideMenu());
    },[sideMenu]);

    useEffect(()=>{
        setDrinkMenu(getDrinkMenu());
    },[drinkMenu]);

    return(
        <>
            <div style={{height:'400px'}}>
                <div style={{borderBottom:'1px solid'}}>
                    <div style={{textAlign:'center',lineHeight:'100px',height:'100px'}}>
                        선택한 메뉴
                    </div>
                    <div style={{textAlign:'end',lineHeight:'30px'}}>
                        <Link to="/payment">주문하기</Link>
                    </div>
                </div>
                <div style={{textAlign:'center',lineHeight:'200px'}}>
                    <Link to="/additional">메뉴 클릭!</Link>
                </div>
            </div>
        </>
    );
}

export default MainMenu;