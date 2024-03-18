import {Link} from 'react-router-dom';

function Home(){

    return(
        <>
            <div style={{textAlign:'center',lineHeight:'450px',height:'450px'}}>
                <Link to="menu">대충광고</Link>
            </div>
            <div style={{height:'200px'}}>
                <div style={{width:'422px',textAlign:'center',lineHeight:'200px',display:'inline-block',cursor:'pointer',border:'1px solid'}}>
                    포장
                </div>
                <div style={{width:'423px',textAlign:'center',lineHeight:'200px',display:'inline-block',cursor:'pointer',border:'1px solid'}}>
                    매장
                </div>
            </div>
        </>
    );
}

export default Home;