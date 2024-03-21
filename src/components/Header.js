import { useEffect, useState } from 'react';
import {Link, NavLink, Navigate} from 'react-router-dom';

function Header(){

    const [isTrue,setIsTrue] = useState(false);

    const orderStyle = {
        backgroundColor: 'orange',
    };

    const onClickGotoHanler = () =>{
        setIsTrue(false);
    }

    const onClickIntoHanler = () =>{
        setIsTrue(true);
    }
    
    useEffect(()=>{
        console.log(isTrue);
        <Navigate to={`/menu/${isTrue}`}/>
    },[isTrue]);

    return(
        <>
            <div style={{textAlign:'end',borderBottom:'1px solid'}}>
                <button style={{margin:'5px',display:'inline-block',textDecorationLine:'none'}}>
                    <NavLink onClick={onClickGotoHanler} to={`menu/${isTrue}`} style={({isActive})=>isActive? orderStyle:undefined}>포장</NavLink>
                </button>
                &nbsp;
                <button style={{display:'inline-block',textDecorationLine:'none'}}>
                    <NavLink onClick={onClickIntoHanler} to={`menu/${!isTrue}`} style={({isActive})=>isActive? orderStyle:undefined}>매장</NavLink>
                </button>
                &nbsp;
                <button style={{display:'inline-block',textDecorationLine:'none'}}>
                    <Link to='../'>처음으로</Link>
                </button>
            </div>
        </>
    );
}

export default Header;