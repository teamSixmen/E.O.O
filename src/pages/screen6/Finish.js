import {Link} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Finish(){
    return(
        <>
            <Header/>
            <div style={{textAlign:'center',lineHeight:'450px',height:'450px'}}>
                <Link to="../">주문완료</Link>
            </div>
            <Footer/>
        </>
    );
}

export default Finish;