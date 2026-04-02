function Menu(){
    return(
        <div className="menu_king">
            <div>
                <span className="material-symbols-outlined" id="burguer">menu</span>
            </div>

            <ul>
                <a href="#">Home</a>
                <a href="#">Criar Post</a>
                <a href="#">Editar Post</a>
                <a href="#">Sign Up / Login</a>
            </ul>

            <a href="#"><img src="src/images/site_icon.png" alt="Xisde Icon" width={100}/></a>
        </div>
    )
}

export default Menu;