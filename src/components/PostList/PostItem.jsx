import React from 'react';
import avatar from '../../assets/pic.JPG';

function PostHeader({ author, date }) {
  return (
    <div className="postHeader">
      <img src={avatar} className="avatar" alt="avatar" />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComents({ comments }) {
  return (
    <>
      <div className="postComment">
        <div className="divider" />
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <img src={avatar} className="avatar" alt="userCommet" />
            <p>
              <span>{comment.author.name} </span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p>{content}</p>
      <PostComents comments={comments} />
    </div>
  );
}

export default PostItem;
