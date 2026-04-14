import { useState } from "react";
import { auth } from "../src/firebase";
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
                
                setMsg(erro.code)

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
            } else{
                setMsg("Erro ao cadastrar.")
            }

        }
    }

    return(
        <div>
            
        </div>
    )
}