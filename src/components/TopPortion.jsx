import Loginbutton from "./LoginBtn"
import TopLeft from "./TopLeft"
import './styling/TopPortion.css'

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