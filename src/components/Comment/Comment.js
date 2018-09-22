import React from 'react';
import './Comment.css';

const Comment = (props) => {
  return (
    <div className={"comment" + (props.highlightedComment === props.comment.id ? ' highlight' : '')}>
      <div className='comment__time'>{props.comment.time}</div>
      <p className='comment__description'>{props.comment.description}</p>
    </div>
  );
}

export default Comment;
