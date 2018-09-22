import React from 'react';
import ReactDOM from 'react-dom';
import Moment from './Moment';

let moment = {
  time: '21',
  description: 'Goal'
}

let handleClick = () => '';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Moment moment={moment} handleClick={handleClick} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
