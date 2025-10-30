import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostForm from './comp/PostForm'
import PostList from './comp/PostList'

function App() {

  const [listPost,setListPost] = useState([])
  

  const handlePostedItem = (value) => {
    const newObj = {id:listPost.length+1,text:value,time: new Date().toLocaleString()}
    setListPost([...listPost,newObj])
  }
  return (
    <>
    
      <h1>Simple Post App</h1>
      <PostForm toPostList={handlePostedItem}></PostForm>
      <PostList posts = {listPost}></PostList>

    </>
  )
}

export default App
