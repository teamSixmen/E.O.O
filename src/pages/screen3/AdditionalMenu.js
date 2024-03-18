import {Link} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function AdditionalMenu(){
    return(
        <>
            <Header/>
            <div style={{textAlign:'center',lineHeight:'400px',height:'400px',border:'1px solid'}}>
                대충 메뉴
            </div>
            <div style={{textAlign:'center',lineHeight:'50px',borderTop:'1px solid'}}>
                <Link to="../menu">추가하기</Link> | {" "}
                <Link to="../menu">취소</Link>
            </div>
        </>
    );
}

export default AdditionalMenu;