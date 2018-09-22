import React from 'react';
import './CommentList.css';

import CommentListItem from '../CommentListItem/CommentListItem';

const CommentList = (props) => {
  return (
    <div id='comment-list'>
      <h1 className='comment-list__heading'>Live Commentary</h1>
      {props.comments.map((comment, index) => {
        return <CommentListItem comment={comment} key={index} />
      })}
    </div>
  );
}

export default CommentList;
