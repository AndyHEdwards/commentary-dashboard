import React from 'react';
import './CommentList.css';

import CommentListItem from '../CommentListItem/CommentListItem';

const CommentList = () => {
  return (
    <div id='comment-list'>
      <CommentListItem />
      <CommentListItem />
      <CommentListItem />
      <CommentListItem />
    </div>
  );
}

export default CommentList;
