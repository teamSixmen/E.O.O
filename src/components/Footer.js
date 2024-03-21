import {Link} from 'react-router-dom';

function Footer(){
    return(
        <>
            <div style={{borderTop:'1px solid'}}>
                <div style={{textAlign:'center',lineHeight:'150px',background:'green',width:'150px',height:'150px',display:'inline-block'}}>
                    <Link to='../'>직원 호출</Link>
                </div>
                <div style={{textAlign:'center',lineHeight:'150px',background:'green',width:'700px',height:'150px',background:'brown',display:'inline-block'}}>
                    단계 이미지
                </div>
            </div>
        </>
    );
}

export default Footer;