import Menu from '../components/Header.jsx';
import Post from '../components/Post.jsx';

function Home({ postsList }){
    return(
    <div>
        <Menu />
        
        {postsList.map((post) => (
        <Post dataPost={post} />
))}
    </div>
    )
}

export default Home;