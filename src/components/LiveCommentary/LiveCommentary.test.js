import React from 'react';
import ReactDOM from 'react-dom';
import LiveCommentary from './LiveCommentary';

let comments = [{
  time: '21',
  description: 'Goal'
}, {
  time: '47',
  description: 'Save'
}]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LiveCommentary comments={comments} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
