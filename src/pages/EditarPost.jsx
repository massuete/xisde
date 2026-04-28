import Menu from "../components/Header";

import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Post from "../components/Post";
import { useParams } from "react-router-dom";

function EditarPost({user}){   

    const [userPostList, setUserPostList] = useState([]);

    useEffect(() => {
        if (!user) return;

        const userPosts = query(
        collection(db, "posts"),
        where("autor", "==", user.email)
        ) 
        
        async function handleEditPost() {
            const tempList = [];

            const docPostsUser = await getDocs(userPosts);

            docPostsUser.forEach((doc) => {
                tempList.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setUserPostList(tempList)
        };

        handleEditPost();

        }, [user])

    return(
        <div>
            <Menu user={user}/>

            {userPostList.map((post) => (
                <Post key={post.id} dataPost={post} canEdit={true}/>
            ))}
        </div>
    )
}

export default EditarPost;