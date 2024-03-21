import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header(){

    const [isTrue,setIsTrue] = useState(false);

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

    const onClickGotoHanler = () =>{
        setIsTrue(false);
    }
    
    const onClickIntoHanler = () =>{
        setIsTrue(true);
    }
    
    useEffect(()=>{
        console.log(isTrue);
    },[isTrue]);

    return(
        <>
            <div style={{textAlign:'end',borderBottom:'1px solid'}}>
                <button onClick={onClickGotoHanler} style={gotoStyle}>
                    포장
                </button>
                &nbsp;
                <button onClick={onClickIntoHanler} style={intoStyle}>
                    매장
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