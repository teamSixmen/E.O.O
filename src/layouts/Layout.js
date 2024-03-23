import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout({isTrue, setIsTrue, setSelected, setTotalPrice}){
    return(
        <>
            <Header isTrue={isTrue} setIsTrue={setIsTrue} setSelected={setSelected} setTotalPrice={setTotalPrice}/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;