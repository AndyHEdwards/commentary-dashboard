import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

let comment = {
  time: '21',
  description: 'Goal'
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comment comment={comment} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
