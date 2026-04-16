import Menu from '../components/Header.jsx';
import Post from '../components/Post.jsx';

function Home({ postsList, user }){
    return(
    <div>
        <Menu user={user}/>

        {user ? (
            <p>Logado como: {user.email}</p>
            ) : (
            <p>Você não está logado.</p>
            )}
        
        {postsList.map((post) => (
        <Post dataPost={post} />
))}
    </div>
    )
}

export default Home;