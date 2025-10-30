import React from "react";
import likeIcon from '../assets/like.png'
import dislikeIcon from '../assets/dislike.png'
import { useState } from "react";
const PostList = ({posts}) => {
    const [like, setLike] = useState({})
    const [dislike, setDisLike] = useState({})
    const [comments, setComments] = useState({}); // { postId: [ {id, val}, ... ] }
    const [commentInput, setCommentInput] = useState({}); // { postId: currentInput }
    const handleComments = (postId) => {
    const comment = commentInput[postId]?.trim();
    if (!comment) return;

    const newItem = {
      id: (comments[postId]?.length || 0) + 1,
      val: comment,
    };

    setComments({
      ...comments,
      [postId]: [...(comments[postId] || []), newItem],
    });

    setCommentInput({ ...commentInput, [postId]: '' });
  };

    return (
    <>
        {posts.map(item => (
            <div key={item.id} className="post-item"> {/* Added wrapper */}
               <div className="post-text">
                <div className="post-headers">
                    <span className="post-message"><strong>Post {item.id}:</strong> {item.text}</span>
                    <span className="post-time">{item.time}</span>
                </div>
                </div>


                <div className="like-dislike">
                    <img src={likeIcon} onClick={() => setLike({...like,[item.id]:(like[item.id] || 0)+1})} /> {like[item.id] || 0}
                    <img src={dislikeIcon} onClick={() => setDisLike({...dislike,[item.id]:(dislike[item.id] || 0)+1})} /> {dislike[item.id] || 0}
                </div>

                <div className="comment-box">
                    <textarea 
                        value={commentInput[item.id] || ''} 
                        onChange={(e) => setCommentInput({...commentInput,[item.id]:e.target.value})}
                        placeholder="Write a comment..."
                    ></textarea>
                    <button className="btn" type="button" onClick={() => handleComments(item.id)}>Comment</button>
                </div>

                {(comments[item.id] || []).length > 0 && (
                    <div className="comments-list">
                        <strong>Comments:</strong>
                        <ul>
                            {(comments[item.id] || []).map(c => <li key={c.id}>{c.val}</li>)}
                        </ul>
                    </div>
                )}
            </div> // <-- closing wrapper div
        ))}
    </>
)

}

export default PostList