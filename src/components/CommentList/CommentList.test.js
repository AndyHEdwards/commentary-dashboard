import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList';

let comments = [{
  time: '21',
  description: 'Goal'
}, {
  time: '47',
  description: 'Save'
}]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentList comments={comments} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
