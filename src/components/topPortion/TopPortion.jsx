import Loginbutton from "../loginBtns/LoginBtn"
import TopLeft from "../topLeft/TopLeft"
import './TopPortion.css'

export default function TopPortion(){
    return(
        <>
        <div className="top-portion-container">
            <TopLeft /> 
            <Loginbutton /> 
        </div>
        </>
    );
}