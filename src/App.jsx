import { useState } from 'react'
import Menu from './components/Header.jsx'
import Post from './components/Post.jsx'

var Posts = [
    {
      titulo: "titulo01",
      paragrafo: "paragrafo01",
      autor: "autor01",
      data: "data01",
      emocao: "emocao02",
    },

    {
      titulo: "titulo02",
      paragrafo: "paragrafo02",
      autor: "autor02",
      data: "data02",
      emocao: "emocao01",
    }
]


function App(){
  return(
    <div>
      <Menu/>

      {Posts.map((post) => (
        <Post dataPost= {post}/>
      ))}
    </div>
  )
}
export default App
