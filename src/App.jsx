import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import CriarPost from './pages/CriarPost.jsx'

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

  function handleAddPost(){
    setPostsList ([...postsList,
      postForm
    ])
  }

  return(
    <div>
      <Routes>
        <Route path='/' element={<Home postsList={postsList} />} />
        <Route path='/criar' element={<CriarPost setPostsList={setPostsList} />} />
      </Routes>
    </div>
  )
}
export default App
