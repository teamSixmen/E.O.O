import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
            <div style={{textAlign:'end',borderBottom:'1px solid'}}>
                <Link to='../'>처음으로</Link>
            </div>
        </>
    );
}

export default Header;