import {Link} from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OnlyPayment from './OnlyPayment';

function Payment({selected, setSelected, selectedQuantity, totalPrice, setTotalPrice}){

    const onClickCancel = ()=>{
        setSelected([]);
        setTotalPrice(0);
    }

    return(
        <>
            <div>
                {selected.map(menu=><OnlyPayment key={menu.menuCode} menu={menu} quantity={selectedQuantity}/>)}
            </div>
            <div style={{textAlign:'end'}}>
                총 결제 금액 : {totalPrice}원
            </div>
            <div style={{height:'200px'}}>
                <div style={{background:'orange',width:'422px',textAlign:'center',lineHeight:'200px',display:'inline-block',cursor:'pointer',border:'1px solid'}}>일반결제</div>
                <div style={{width:'423px',textAlign:'center',lineHeight:'200px',display:'inline-block',cursor:'pointer',border:'1px solid'}}>간편결제</div>
            </div>
            <div style={{textAlign:'center',lineHeight:'100px',height:'100px',marginLeft:'-30px'}}>
                <Link to="../settlement">결제하기</Link> | {" "}
                <Link to="../menu" onClick={onClickCancel}>취소</Link>
            </div>
        </>
    );
}

export default Payment;