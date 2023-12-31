import React from 'react';
import Posting from './posting';

const Post = ({ savedPosts, setSavedPosts, bookmark, setBookmark, posting, liked, setLiked, savedb }) => {
  return (
    <div className='post-container'>
      {posting.map((post, index) => (
        <Posting
          key={index}
          savedb={savedb}
          postIndex={index}
          posting={post}
          profileImg={post.profileImg}
          username={post.username}
          postImg={post.postImg}
          postTime={post.postTime}
          likes={post.likes}
          caption={post.caption}
          commentar={post.commentar}
          savedPosts={savedPosts}
          setSavedPosts={setSavedPosts}
          liked={liked[index]}
          setLiked={() => {
            setLiked((prev) => {
              const newLiked = [...prev]
              newLiked[index] = !newLiked[index]
              return newLiked
            })
          }}
          bookmark={bookmark[index]}
          setBookmark={() => {
            setBookmark((prev) => {
              const newState = [...prev];
              newState[index] = !newState[index];
              return newState;
            });
          }}
        />
      ))}
    </div>
  );
};

export default Post;
