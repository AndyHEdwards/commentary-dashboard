import React from 'react';
import './CommentListItem.css';

const CommentListItem = (props) => {
  return (
    <div className='comment-list-item'>
      <div className='comment-list-item__time'>{props.comment.time}</div>
      <p className='comment-list-item__description'>{props.comment.description}</p>
    </div>
  );
}

export default CommentListItem;
