import { Link, useParams } from 'react-router-dom';
import itemStyle from './MenuItem.module.css';

function SelectedMenu(){

    const {menuCode} = useParams();
    return(
        <div style={{borderBottom:'1px solid'}}>
            <div style={{textAlign:'center',lineHeight:'200px',height:'200px'}}>
            </div>
            <div style={{textAlign:'end',lineHeight:'30px'}}>
                <Link to="/payment">주문하기</Link>
            </div>
        </div>
    );
}

export default SelectedMenu;