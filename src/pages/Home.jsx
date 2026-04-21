import { useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore';

import Menu from '../components/Header.jsx';
import Post from '../components/Post.jsx';
import { db } from '../firebase/index.jsx';

function Home({ setPostsList, postsList, user }){
    useEffect(() => {
        handleDocPosts()
    }, [])

    async function handleDocPosts(){
        const tempPostsList = []

        const docPosts = await getDocs(collection(db, "posts"));


        docPosts.forEach((doc) => {
            tempPostsList.push({
                id: doc.id,
                ...doc.data().novoPost
            });
        });

        setPostsList(tempPostsList)
    }
    return(
    <div>
        <Menu user={user}/>

        {user ? (
            <p>Logado como: {user.email}</p>
            ) : (
            <p>Você não está logado.</p>
            )}
        
        {postsList.map((post) => (
        <Post key={post.id} dataPost={post} />
))}
    </div>
    )
}

export default Home;