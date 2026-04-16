import Menu from "../components/Header";

import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const[msg, setMsg] = useState('');

    async function handleAuth(){
        if(isLogin){
            try{

                await signInWithEmailAndPassword(auth, email, senha)
                navigate('/')

            } catch(erro){
                
                setMsg("Email ou Senha incorretos. Tente Novamente.")

            }
        } else{
            try{

                await createUserWithEmailAndPassword(auth, email, senha)
                setIsLogin(true)
                setEmail('')
                setSenha('')

            } catch(erro){

                if(erro.code === "auth/email-already-in-use"){
                    setMsg("Esse email já está cadastrado!")
                }   else{
                setMsg("Erro ao cadastrar.")
                }
            }

        }
    }   

    return(
        <div>
            <Menu/>

            <h1>{isLogin ? "Login" : "Cadastre-se"}</h1>

            <form className="Login-form">

                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="Login-form-input" placeholder="Email" />

                <input onChange={(e) => setSenha(e.target.value)} value={senha} type="password" className="Login-form-input" placeholder="Senha" />

                <button onClick={handleAuth} type="button">
                    {isLogin ? "Entrar" : "Cadastrar"}
                </button>
            </form>
            {msg && <p>{msg}</p>}

            <p onClick={() => {
                setIsLogin(!isLogin); setMsg('');
                }}>

                {isLogin ? "Não tem uma conta? Cadastre-se" : "Já tem uma conta? Faça Login"}

            </p>
        </div>
    )
}

export default Login;