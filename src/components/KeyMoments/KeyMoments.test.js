import React from 'react';
import ReactDOM from 'react-dom';
import KeyMoments from './KeyMoments';

let moments = [{
  time: '21',
  description: 'Goal'
}, {
  time: '47',
  description: 'Save'
}];

let handleHighlightComment = () => '';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<KeyMoments keyMoments={moments} handleHighlightComment={handleHighlightComment} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
