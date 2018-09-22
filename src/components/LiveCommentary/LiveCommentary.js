import React from 'react';
import './LiveCommentary.css';

import Comment from '../Comment/Comment';

const LiveCommentary = (props) => {
  return (
    <div id='live-commentary'>
      <h1 className='live-commentary__heading'>Live Commentary</h1>

      {props.comments.map((comment, index) => {
        return <Comment comment={comment} highlightedComment={props.highlightedComment} key={index} />
      })}
    </div>
  );
}

export default LiveCommentary;
