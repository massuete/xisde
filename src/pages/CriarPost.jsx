import Menu from "../components/Header";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function CriarPost({ setPostsList, user }){

    const navigate  = useNavigate();

    const [postForm, setPostForm] = useState ({
        titulo: '', 
        paragrafo: '', 
        emocao: ''
    })

    async function handleAddPost(){
        const novoPost = {
            ...postForm,
            data: new Date().toLocaleDateString(),
            autor: user.email
        }

        await addDoc(collection(db, "posts"), {
            ...novoPost
        });

        setPostsList (prev => [...prev, 
        novoPost]);

        navigate("/");

    }

    return(
        <div>
            <Menu user={user}/>

            <h1>Criar Post</h1>

            <input type="text" id="postTitle" minLength={5} maxLength={40} value={postForm.titulo} 
            onChange={(e) => 
            setPostForm({
                ...postForm,
                titulo: e.target.value
            })} required/>

            <textarea name="postContent" id="postContent" value={postForm.paragrafo} 
            onChange={(e) =>
                setPostForm({
                    ...postForm,
                    paragrafo: e.target.value
                })
            } required></textarea>

            <select name="postEmotion" id="postEmotion" value={postForm.emocao} 
            onChange={(e) =>
                setPostForm({
                    ...postForm,
                    emocao: e.target.value
                })
            } required>
                <option value="">--Escolha uma Opção--</option>
                <option value="animado">Animado(a)</option>
                <option value="raiva">Raiva</option>
                <option value="constrangido">Constrangido(a)</option>
                <option value="medo">Medo</option>
                <option value="confuso">Confuso(a)</option>
                <option value="ansiedade">Ansioso(a)</option>
                <option value="nostalgia">Nostalgia</option>
                <option value="triste">Tristeza</option>
                <option value="apaixonado">Apaixonado(a)</option>
                <option value="tedio">Entediado</option>
            </select>

            <button type="button" onClick={handleAddPost}>
                Postar
            </button>
        </div>
    )
}

export default CriarPost;