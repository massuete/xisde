import Menu from "../components/Header";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditarPostId({user}){
    const { id } = useParams();

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

    }, [user, id]) 

    return( 
    <div> 
        <Menu user={user}/> 
    </div> ) 
}

export default EditarPostId;