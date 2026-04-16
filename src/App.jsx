import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase/index.jsx'

import Home from './pages/Home.jsx'
import CriarPost from './pages/CriarPost.jsx'
import Login from './pages/Login.jsx'

function App(){

  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });

    return() => unsubscribe();
  }, []);


  return(
    <div>
      <Routes>
        <Route path='/' element={<Home postsList={postsList} user={user} />} />
        <Route path='/criar' element={<CriarPost setPostsList={setPostsList} user={user} />} />
        <Route path='/login' element={<Login user={user} />} />
      </Routes>
    </div>
  )
}
export default App
