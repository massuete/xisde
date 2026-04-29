import Menu from "../components/Header";

import { getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditarPostId({user}){
    const { id } = useParams();

    const navigate = useNavigate();

    const [postEdit, setPostEdit] = useState({}); 
    
    useEffect(() => 

        { if (!user || !id) return; 

        async function handleIdPostSelect() { 
            const snapshot = await getDoc(doc(db, "posts", id)); 

            setPostEdit({
                id: snapshot.id,
                ...snapshot.data()
            })
        }

        handleIdPostSelect(); 

    }, [user, id]);
    
    async function handleUptadePost(){
        await updateDoc(doc(db, "posts", id), {
            titulo: postEdit.titulo,
            paragrafo: postEdit.paragrafo,
            emocao: postEdit.emocao  
        })

        navigate('/');
    }

    async function handleDeletePost(){
        await deleteDoc(doc(db, "posts", id));

        navigate('/');
    }

    return( 
    <div> 
        <Menu user={user}/> 

        <h2>Editar Post</h2>

        <input type="text" id="postTitle" minLength={5} maxLength={40} value={postEdit.titulo || ""} onChange={(e) => 
            setPostEdit({
                ...postEdit,
                titulo: e.target.value
            })
        }/>

        <textarea name="postContent" id="postContent" value={postEdit.paragrafo || ""} onChange={(e) =>
                setPostEdit({
                    ...postEdit,
                    paragrafo: e.target.value
                })
        }/>

        <select name="postEmotion" id="postEmotion" value={postEdit.emocao || ""} 
            onChange={(e) =>
                setPostEdit({
                    ...postEdit,
                    emocao: e.target.value
                })
            }>
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

            <button type="button" onClick={handleDeletePost}>
                Deletar Post
            </button>

            <button type="button" onClick={handleUptadePost}>
                Salvar
            </button>
    </div> ) 
}

export default EditarPostId;