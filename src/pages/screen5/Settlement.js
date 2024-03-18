import {Link} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Settlement(){
    return(
        <>
            <Header/>
            <div style={{textAlign:'center',lineHeight:'400px',height:'400px',border:'1px solid'}}>
                <Link to="../goodbye">카드입력</Link>
            </div>
            <Footer/>
        </>
    );
}

export default Settlement;