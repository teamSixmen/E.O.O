import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header({isTrue, setIsTrue, setSelected, setTotalPrice}){

    const gotoStyle = {
        display:'inline-block',
        backgroundColor: !isTrue?'orange':'white',
        cursor:'pointer'
    };

    const intoStyle = {
        display:'inline-block',
        backgroundColor: isTrue?'orange':'white',
        cursor:'pointer'
    };

    const onClickGotoHandler = () =>{
        setIsTrue(false);
    }
    
    const onClickIntoHandler = () =>{
        setIsTrue(true);
    }

    const onClickEdanHandler = () =>{
        setIsTrue(false);
        setSelected([]);
        setTotalPrice(0);
    }
    
    useEffect(()=>{
        console.log(isTrue);
    },[isTrue]);

    return(
        <>
            <div style={{textAlign:'end',borderBottom:'1px solid'}}>
                <button onClick={onClickGotoHandler} style={gotoStyle}>
                    포장
                </button>
                &nbsp;
                <button onClick={onClickIntoHandler} style={intoStyle}>
                    매장
                </button>
                &nbsp;
                <button onClick={onClickEdanHandler} style={{display:'inline-block',textDecorationLine:'none'}}>
                    <Link to='../'>처음으로</Link>
                </button>
            </div>
        </>
    );
}

export default Header;