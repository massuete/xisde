import { Link, useNavigate } from "react-router-dom";
import logo from "../images/site_icon.png"

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Menu({ user }){
    const navigate = useNavigate(); 

    function handleLogout(){
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((erro) => {
            console.log("Erro ao deslogar. Tente novamente", erro)
        
        })}

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
                    <Link to={"/editar"}>Editar Post</Link>
                </li>
                {user ? ("") : 
                (<li>
                    <Link to={"/login"}>Sign Up / Login</Link>
                </li>)}
            </ul>

            <img src={logo} alt="Xisde Icon" width={100}/>

            {user ? 
            (<button onClick={handleLogout} type="button">Log Out</button>) 
            : 
            ("")}
        </div>
    )
}

export default Menu;