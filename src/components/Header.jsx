import { Link } from "react-router-dom";
import logo from "../images/site_icon.png"

function Menu(){
    return(
        <div className="menu_king">
            <div>
                <span className="material-symbols-outlined" id="burguer">menu</span>
            </div>

            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/criar"}>Criar Post</Link>
                </li>
                <li>
                    <Link to={"/"}>Editar Post</Link>
                </li>
                <li>
                    <Link to={"/"}>Sign Up / Login</Link>
                </li>
            </ul>

            <img src={logo} alt="Xisde Icon" width={100}/>
        </div>
    )
}

export default Menu;