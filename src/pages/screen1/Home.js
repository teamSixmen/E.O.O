import { useState } from 'react';
import {Link} from 'react-router-dom';

function Home({setIsTrue}){

    const onClickIntoHandler = () => {
        setIsTrue(true);
    }

    return(
        <>
            <div style={{textAlign:'center',lineHeight:'450px',height:'450px'}}>
                대충광고
            </div>
            <div style={{height:'200px'}}>
                <Link to='menu'>
                    <div style={{backgroundColor:'orange',textAlign:'center',lineHeight:'200px',cursor:'pointer',border:'1px solid'}}>
                        포장
                    </div>
                </Link>
                <Link to='menu'>
                    <div onClick={onClickIntoHandler} style={{backgroundColor:'orange',textAlign:'center',lineHeight:'200px',cursor:'pointer',border:'1px solid'}}>
                        매장
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Home;