import Menu from "../components/Header";

import { getDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditarPostId({user}){
    const { id } = useParams();

    const navigate = useNavigate();

    const [postEdit, setPostEdit] = useState({}); 

    const [loadingType, setLoadingType] = useState(null);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
    
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
        setLoadingType("updating")

        await updateDoc(doc(db, "posts", id), {
            titulo: postEdit.titulo,
            paragrafo: postEdit.paragrafo,
            emocao: postEdit.emocao  
        })

        await delay (2000);

        navigate('/');
    }

    async function handleDeletePost(){
        const confirmacao = confirm("Tem certeza que deseja apagar esse post?")

        if (!confirmacao) return;

        setLoadingType("deleting");

        await deleteDoc(doc(db, "posts", id));
        
        await delay (2000);

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

            <button disabled={!!loadingType} type="button" onClick={handleDeletePost}>
                Deletar Post
            </button>

            <button disabled={!!loadingType} type="button" onClick={handleUptadePost}>
                Salvar
            </button>

            {loadingType && (
                <div className="loading-overlay">
                    {loadingType === "updating" ? (<p>Salvando mudanças...</p>) : (<p>Deletando Post...</p>)}
                </div>
            )}
    </div> ) 
}

export default EditarPostId;