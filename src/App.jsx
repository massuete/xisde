import { useState } from 'react'
import Menu from './components/Header.jsx'
import Post from './components/Post.jsx'

function App(){

  const [postForm, setPostForm] = useState ({
    titulo: '', 
    paragrafo: '', 
    emocao: ''
  })

  const [postsList, setPostsList] = useState([{
    titulo: 'Título01',
    paragrafo: 'Paragrafo01',
    autor: 'Autor 01',
    data: 'Data01',
    emocao: 'Emocao01'
  }]);

  const handleChange = (event) => {
    setPostForm({
      ...postForm,
      titulo: event.target.value
    });
  };

  return(
    <div>
      <Menu/>

      {postsList.map((post) => (
        <Post dataPost= {post}/>
      ))}

      <input type="text" onChange={handleChange} />

      <p>{postForm.titulo}</p>
    </div>
  )
}
export default App
