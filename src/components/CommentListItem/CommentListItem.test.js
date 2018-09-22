import React from 'react';
import ReactDOM from 'react-dom';
import CommentListItem from './CommentListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
