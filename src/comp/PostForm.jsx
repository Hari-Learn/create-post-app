import React  from "react";
import { useState } from "react";

const PostForm = ({toPostList}) => {
    const[post,setPost] = useState('')
    const handlePost = () =>{
        if (!toPostList) {
           return
        }
        toPostList(post)
        setPost('')
    }
    return (
        <span className="spn">
            <textarea 
            className="post-input"
            value={post}
            onChange={(e)=>setPost(e.target.value)}
            ></textarea> 
            <button className="btn"
            onClick={handlePost}
            disabled={post.trim().length === 0}
            > Create Post</button>
        </span>
    )
}

export default PostForm