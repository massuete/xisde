import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
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

  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });

    return() => unsubscribe();
  }, []);


  return(
    <div>
      <Routes>
        <Route path='/' element={<Home postsList={postsList} user={user} setPostsList={setPostsList} />} />
        <Route path='/criar' element={user ? <CriarPost setPostsList={setPostsList} user={user} /> : <Navigate to={"/login"} replace/>} />
        <Route path='/login' element={<Login user={user} />} />
      </Routes>
    </div>
  )
}
export default App;
